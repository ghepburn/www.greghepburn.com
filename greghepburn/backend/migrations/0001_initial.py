# Generated by Django 2.2.6 on 2020-03-25 17:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='education',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('year', models.CharField(max_length=30)),
                ('educationType', models.CharField(max_length=100)),
                ('institution', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='images/')),
                ('desc', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first', models.CharField(max_length=10)),
                ('last', models.CharField(max_length=10)),
                ('town', models.CharField(max_length=10)),
                ('province', models.CharField(max_length=2)),
                ('country', models.CharField(max_length=10)),
                ('interest_area', models.CharField(max_length=100)),
                ('tools', models.CharField(max_length=100)),
                ('story', models.TextField()),
                ('intro', models.TextField()),
                ('education', models.CharField(max_length=200)),
                ('achomplishments', models.TextField()),
                ('hobbies', models.CharField(max_length=255)),
            ],
        ),
        migrations.CreateModel(
            name='project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('category', models.CharField(choices=[('Website Development', 'Website Development'), ('Machine Learning', 'Machine Learning'), ('Website Scrapeing', 'Website Scrapeing'), ('Scripting', 'Scripting'), ('Data Analysis', 'Data Analysis'), ('GUI/Software Development', 'GUI/Software Development')], default='Scripting', max_length=25)),
                ('date_created', models.DateField()),
                ('tools_used', models.CharField(max_length=255)),
                ('summary', models.CharField(max_length=255)),
                ('description', models.TextField(blank=True)),
                ('featured', models.BooleanField(default=False)),
                ('github_link', models.CharField(max_length=100)),
                ('picture_title', models.CharField(blank=True, max_length=100, null=True)),
                ('picture', models.ImageField(blank=True, null=True, upload_to='images/')),
            ],
        ),
    ]
