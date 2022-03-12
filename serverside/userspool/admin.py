from django.contrib import admin

# Register your models here.
from .models import Userpool
from .models import RegisteredDevices

# Register your models here.
# This enable the models in the admin page
admin.site.register(Userpool)
admin.site.register(RegisteredDevices)