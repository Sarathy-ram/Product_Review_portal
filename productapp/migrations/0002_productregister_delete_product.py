# Generated by Django 5.1 on 2024-08-23 06:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('productapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ProductRegister',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('roll_no', models.CharField(max_length=20, unique=True)),
                ('special_lab', models.CharField(max_length=100)),
                ('project_guide', models.CharField(max_length=100)),
                ('abstract', models.TextField(max_length=500)),
                ('bom_submission', models.FileField(upload_to='BOMs/')),
            ],
        ),
        migrations.DeleteModel(
            name='Product',
        ),
    ]
