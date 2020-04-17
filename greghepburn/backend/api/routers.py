from rest_framework import routers
from backend.api import viewsets

router = routers.DefaultRouter()
router.register(r'projects', viewsets.ProjectViewSet)
router.register(r'profile', viewsets.ProfileViewSet)
router.register(r'images', viewsets.ImageViewSet)
router.register(r'education', viewsets.EducationViewSet)