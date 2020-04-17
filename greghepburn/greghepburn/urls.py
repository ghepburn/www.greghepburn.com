from django.contrib import admin
from django.urls import include, path

urlpatterns = [
	path('admin/', admin.site.urls),
	path('', include('frontend.urls')),
	path('', include('backend.urls')),
	# path('', include('user.urls')),
	# path('projects/', include('projects.urls'))
]