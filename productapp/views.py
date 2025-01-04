from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, redirect
from .forms import ProductRegisterForm
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect
from .forms import ProductRegisterForm ,ProductUpdateForm
from .models import ProductRegister



def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            if user.groups.filter(name='Admin').exists():
                return redirect('admin_home')  # Replace with your admin page URL name
            else:
                
                return redirect('home')  # Replace with your regular home page URL name
        else:
            return render(request, 'login.html', {'error': 'Invalid credentials'})
    return render(request, 'login.html')
@login_required
@login_required
def problem_statement_approval(request):
    products = ProductRegister.objects.filter(project_status='Pending')
    return render(request, 'Problem statementapproval.html', {'products': products})

@login_required
def admin_home(request):
    # Admin dashboard logic here
    total_applied = ProductRegister.objects.count()
    total_accepted = ProductRegister.objects.filter(project_status='Approved').count()
    total_rejected = ProductRegister.objects.filter(project_status='Rejected').count()
    total_pending = ProductRegister.objects.filter(project_status='Pending').count()
    submissions = ProductRegister.objects.all()[5:]
    context = {
        'username': request.user.username,
        'total_applied': total_applied or 'None',
        'total_accepted': total_accepted or 'None',
        'total_rejected': total_rejected or 'None',
        'total_pending': total_pending or 'None',
        'submissions': submissions,
        
    }
    return render(request, 'admin_home.html',context)

def home_view(request):
     
     user_products = ProductRegister.objects.filter(name=request.user.username)
     submitted_projects = user_products.count()
    # Filter for accepted, rejected projects and count them
     accepted_projects = user_products.filter(name=request.user.username, project_status='Approved').count()
     rejected_projects = user_products.filter(name=request.user.username, project_status='Rejected').count()
    # Count remarks (assuming remarks are stored in a separate field)
     first_review_remarks = user_products.values_list('first_review_remarks', flat=True).exclude(first_review_remarks__isnull=True).exclude(first_review_remarks__exact='')
    
     context = {
        'username': request.user.username,
        'submitted_projects': submitted_projects or 'None',
        'accepted_projects': accepted_projects or 'None',
        'rejected_projects': rejected_projects or 'None',
        'first_review_remarks': list(first_review_remarks) if first_review_remarks else None,
        'products': user_products,
    }
     return render(request, 'home.html',context)

# View for the product registration page (requires login)
@login_required
def product_register(request):
    if request.method == 'POST':
        form = ProductRegisterForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()  # Save to the database
            messages.success(request, 'The Product Registration Is Successful')
            return redirect('home')  # Redirect to home or another page after successful submission
    else:
        form = ProductRegisterForm()

    return render(request, 'product_register.html', {'form': form})

# View for the product details page (requires login)
@login_required
def product_details(request):
    products = ProductRegister.objects.all()  # Fetch all products from the database
    return render(request, 'product_details.html', {'products': products})
 

# View for the product update page (requires login)
@login_required
def product_update(request):
    if request.method == 'POST':
        # Retrieve the product record based on the team lead's name
        name = request.POST.get('name')  # Get team lead name from the form
        if name:
            product = get_object_or_404(ProductRegister, name=name)
        else:
            messages.error(request, 'Team Lead Name is required.')
            return render(request, 'product_update.html', {'form': ProductUpdateForm()})

        form = ProductUpdateForm(request.POST, request.FILES, instance=product)
        if form.is_valid():
            form.save()
            messages.success(request, 'Product details updated successfully!')
            return redirect('home')  # Redirect after successful update
        else:
            # If the form is invalid, log the form errors for debugging
            print(form.errors)  # Check the console for form errors
            messages.error(request, 'There was an error updating the product.')
    else:
        form = ProductUpdateForm()

    return render(request, 'product_update.html', {'form': form})

# View for the about page (requires login)
@login_required
def about(request):
    return render('Product_Review\Product review and tracking system.pdf')
 # Redirect to login page after logout

import random
from django.http import JsonResponse
from .models import ProductRegister

def allocate_mentor(request, product_id):
    if request.method == 'POST':
        mentors = [
            "DR.B.Gopala Krishanan",
            "Prof.Prabanand",
            "Prof.Purusothaman",
            "Prof.Arthanareeswarar"
        ]
        product = ProductRegister.objects.get(id=product_id)
        selected_mentor = random.choice(mentors)
        product.allocated_mentor = selected_mentor
        product.save()
        return JsonResponse({'mentor': selected_mentor})

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import ProductRegister

@csrf_exempt
def approve_product(request, product_id):
   if request.method == 'POST':
        try:
            product = ProductRegister.objects.get(id=product_id)
            product.project_status = 'Approved'  # Update the project_status field
            product.save()
            return JsonResponse({'success': True})

        except ProductRegister.DoesNotExist:
            return JsonResponse({'success': False, 'error': 'Product not found'})

   return JsonResponse({'success': False, 'error': 'Invalid request method'})
