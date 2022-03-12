'''
    Data and Devices: 
    These two models will have many to one relationship. 
    Meaning, one device, will have multiple datas
    this is similar to the tutorial where one quesion, had multiple choices.

    Users and devices: 
    These two models will have many to one relationship. 
    Meaning, one user, will have multiple devices
    this is similar to the tutorial where one quesion, had multiple choices.

'''

from atexit import register
from statistics import mode
from django.db import models


class Userpool(models.Model):
    username = models.CharField(max_length=200)
    
    # When calling a user, the default return is an ID, but we want to return the name
    def __str__(self):
        return self.username

class RegisteredDevices(models.Model):
    '''
    Many-to-one relationship with users. 
    Each user will have a set of devices under it 
    '''
    device_name = models.CharField(max_length=200) 
    owner_name = models.ForeignKey(Userpool, on_delete=models.CASCADE)

    def __str__(self):
        return_value = str(f"Device: '{self.device_name}' owned by: '{self.owner_name}'")
        return (return_value)
