from django.http import JsonResponse
from django.shortcuts import render

# api stuff
from rest_framework.decorators import api_view
from rest_framework.response import Response

from userspool.models import Userpool
from .serializers import UserSerializer, DevicesSerializer

#TODO, based on a user, return JSON the name of the user
@api_view(['GET'])
def get_username(request, user_name):
    _user = Userpool.objects.filter(username__startswith=user_name).get()
    serialized = UserSerializer(_user, many=False)
    return Response(serialized.data)

# TODO, based on a given user, get their devices
@api_view(['GET'])
def get_devices(request, user_name):
   
    _user = Userpool.objects.filter(username__startswith=user_name).get()
    _devices = _user.registereddevices_set.all()
    serialized = DevicesSerializer(_devices, many=True)
    return Response(serialized.data)

# TODO, based on the user, return their most recent data
@api_view(['GET'])
def get_data(request, user_name):
    data = {'data' : 5}
    return Response(data)