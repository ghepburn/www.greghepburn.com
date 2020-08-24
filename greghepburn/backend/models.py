from django.db import models


class profile(models.Model):
	first = models.CharField(max_length=10)
	last = models.CharField(max_length=10)
	town = models.CharField(max_length=10)
	province = models.CharField(max_length=2)
	country = models.CharField(max_length=10)
	interest_area = models.CharField(max_length=100)
	tools = models.CharField(max_length=100)
	story = models.TextField()
	intro = models.TextField()
	education = models.CharField(max_length=200)
	achomplishments = models.TextField()
	hobbies = models.CharField(max_length=255)

	def __str__(self):
		return str(self.first) + "'s profile"


class education(models.Model):
	year = models.CharField(max_length=30)
	educationType = models.CharField(max_length=100)
	institution = models.CharField(max_length=100)
	description = models.CharField(max_length=200) 


class image(models.Model):
	image = models.ImageField(upload_to='images/')
	desc = models.CharField(max_length=100)

	def __str__(self):
		return str(self.desc) + " " + "(ID: " + str(self.pk) + " )"


class project(models.Model):

	CATEGORY_CHOICES = [
		('Website Development', 'Website Development'),
		('Machine Learning', 'Machine Learning'),
		('Website Scrapeing', 'Website Scrapeing'),
		('Scripting', 'Scripting'),
		('Data Analysis', 'Data Analysis'),
		('GUI/Software Development', 'GUI/Software Development')
	]


	title = models.CharField(max_length=50)
	category = models.CharField(max_length=25, choices=CATEGORY_CHOICES, default='Scripting')
	date_created = models.DateField()
	tools_used = models.CharField(max_length = 255)
	summary = models.CharField(max_length = 255)
	description = models.TextField(blank=True)
	featured = models.BooleanField(default=False)
	github_link = models.CharField(max_length=100)
	picture_title = models.CharField(max_length=100, null=True, blank=True)
	picture = models.ImageField(upload_to="images/", null=True, blank=True)

	def __str__(self):
		return str(self.title)