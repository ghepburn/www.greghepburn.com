from django.urls import path, re_path
from . import views

urlpatterns = [
	path('', views.index),
	path('about/', views.index),
	path('about/myStory/', views.index),
	path('about/myTimeline/', views.index),
	path('about/myEducation/', views.index),
	re_path(r'^projects/', views.index)
]