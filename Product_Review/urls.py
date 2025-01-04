from django.contrib import admin
from django.urls import path
from productapp.views import login_view, home_view,admin_home,approve_product,problem_statement_approval,product_register, allocate_mentor, mentor_assignment_dashboard,product_details, product_update, about
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path


urlpatterns = [
    path('admin/', admin.site.urls),  # Django admin site
    path('', login_view, name='login'),  # Redirect to login page by default
    path('home/', home_view, name='home'),  # Home page
    path('Problemstatement/',problem_statement_approval, name='Problem statementapproval'),
    path('product_register/', product_register, name='product_register'),  # Product registration page
    path('product_details/', product_details, name='product_details'),  # Product details page
    path('product_update/', product_update, name='product_update'),  # Product update page
    path('mentor_assignment_dashboard/',mentor_assignment_dashboard,name='mentor_assignment_dashboard'),
    path('about/', about, name='about'),  # About page
      # Logout
    path('admin-home/', admin_home, name='admin_home'),
    path('product_register/', product_register, name='product_register'),
    path('allocate-mentor/<int:product_id>/',allocate_mentor, name='allocate_mentor'),
    path('approve-product/<int:product_id>/',approve_product, name='approve_product'),
    
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
