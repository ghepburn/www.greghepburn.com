from rest_framework import viewsets, permissions
from .serializers import ProfileSerializer, ProjectSerializer, ImageSerializer, EducationSerializer
from backend.models import profile, image, education, project


class ProfileViewSet(viewsets.ReadOnlyModelViewSet):

	queryset = profile.objects.all()
	serializer_class = ProfileSerializer

class ProjectViewSet(viewsets.ReadOnlyModelViewSet):

	queryset = project.objects.all()
	serializer_class = ProjectSerializer

class ImageViewSet(viewsets.ReadOnlyModelViewSet):

	queryset = image.objects.all()
	serializer_class = ImageSerializer

class EducationViewSet(viewsets.ReadOnlyModelViewSet):

	queryset = education.objects.all()
	serializer_class = EducationSerializer
