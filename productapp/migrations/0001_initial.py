# Generated by Django 5.1 on 2024-08-23 10:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('roll_no', models.CharField(max_length=15, unique=True)),
                ('special_lab', models.CharField(max_length=255)),
                ('project_guide', models.CharField(max_length=255)),
                ('abstract', models.TextField()),
                ('bom_submission', models.FileField(upload_to='bom_pdfs/')),
            ],
        ),
    ]