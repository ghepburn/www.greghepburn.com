from django.urls import include, path
from backend.api.routers import router
from django.conf.urls.static import static
from django.conf import settings



urlpatterns = [
	path('api/', include(router.urls))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)