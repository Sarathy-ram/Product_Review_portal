# Generated by Django 5.1 on 2024-09-27 05:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productapp', '0008_productregister_project_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productregister',
            name='project_status',
            field=models.CharField(default='Pending', max_length=50),
        ),
    ]