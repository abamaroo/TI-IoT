from rest_framework import serializers
from userspool.models import Userpool, RegisteredDevices

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userpool
        fields = '__all__'

class DevicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisteredDevices
        fields = '__all__'