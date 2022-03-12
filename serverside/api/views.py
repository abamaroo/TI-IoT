from django.http import JsonResponse
from django.shortcuts import render

# api stuff
from rest_framework.decorators import api_view
from rest_framework.response import Response

from userspool.models import Userpool
from .serializers import *

# based on a user, return JSON the name of the user
@api_view(['GET'])
def get_username(request, user_name):
    _user = Userpool.objects.filter(username__startswith=user_name).get()
    serialized = UserSerializer(_user, many=False)
    return Response(serialized.data)

# based on a given user, get their devices
@api_view(['GET'])
def get_devices(request, user_name):
   
    _user = Userpool.objects.filter(username__startswith=user_name).get()
    _devices = _user.devices.all()
    serialized = DevicesSerializer(_devices, many=True)
    return Response(serialized.data)

# based on the user, return their most recent data
@api_view(['GET'])
def get_data(request, user_name, device_name):
    _user = Userpool.objects.filter(username__startswith=user_name).get()
    data = _user.devices.get(device_name = device_name).dataset.last()
    serialized = DataSetSerializer(data, many=False)
    return Response( serialized.data)

# based on the user, return all their data
@api_view(['GET'])
def get_all_data(request, user_name, device_name):
    _user = Userpool.objects.filter(username__startswith=user_name).get()
    data = _user.devices.get(device_name = device_name).dataset.all()
    serialized = DataSetSerializer(data, many=True)
    return Response( serialized.data)

# TODO post some
