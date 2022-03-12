from django.shortcuts import render
from django.urls import path
from django.http import JsonResponse, HttpResponse

# test view
def sanity_checker(request):
    data = {
        'test': 'valid',
    }
    return JsonResponse(data, safe=False)

urlpatterns = [
    path('test/', sanity_checker, name='api test'),
]