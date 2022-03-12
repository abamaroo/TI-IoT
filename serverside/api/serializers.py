from rest_framework import serializers
from userspool.models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userpool
        fields = '__all__'

class DevicesSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegisteredDevices
        fields = '__all__'

class DataSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dataset
        fields = '__all__'