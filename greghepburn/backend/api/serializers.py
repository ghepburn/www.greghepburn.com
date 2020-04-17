from rest_framework import serializers
from backend.models import profile, image, education, project


class ProfileSerializer(serializers.ModelSerializer):
	class Meta:
		model = profile
		fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
	class Meta:
		model = project
		fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
	class Meta:
		model = image
		fields = '__all__'

class EducationSerializer(serializers.ModelSerializer):
	class Meta:
		model = education
		fields = '__all__'