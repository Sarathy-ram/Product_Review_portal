from django.db import models
from django.utils import timezone
class ProductRegister(models.Model):
    name = models.CharField(max_length=100)
    roll_no = models.CharField(max_length=20, unique=True)  
    special_lab = models.CharField(max_length=100)
    project_guide = models.CharField(max_length=100)
    Project_Title = models.CharField(max_length=100,blank=True,null=True)
    project_status = models.CharField(max_length=50,default='Pending')
    abstract = models.TextField(max_length=500)
    bom_submission = models.FileField(upload_to='media/')
    approval_form = models.FileField(upload_to='media/')
    allocated_mentor = models.CharField(max_length=100, blank=True, null=True) 
    member_1 = models.CharField(max_length=100, blank=True, null=True)
    member_2 = models.CharField(max_length=100, blank=True, null=True)
    member_3 = models.CharField(max_length=100, blank=True, null=True)
    first_review_remarks = models.TextField(blank=True, null=True)
    second_review_remarks = models.TextField(blank=True, null=True)
    final_review_remarks = models.TextField(blank=True, null=True)
    reward_points = models.IntegerField(default=0)
    def __str__(self):
        return self.name
