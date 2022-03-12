from django.http import JsonResponse
from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
# Create your views here.

#TODO, based on a user, return JSON the name of the user
@api_view(['GET'])
def get_username(request, user_name):
    data = {'username' : user_name}
    return Response(data)

# TODO, based on a given user, get their devices
@api_view(['GET'])
def get_devices(request, user_name):
    data ={'device':user_name}
    return Response(data)

# TODO, based on the user, return their most recent data
@api_view(['GET'])
def get_data(request, user_name):
    data = {'data' : 5}
    return Response(data)