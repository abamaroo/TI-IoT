from django.contrib import admin

# Register your models here.
from .models import *

# Register your models here.
# This enable the models in the admin page
admin.site.register(Userpool)
admin.site.register(RegisteredDevices)
admin.site.register(Dataset)