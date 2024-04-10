from django.contrib import admin
from django.contrib.auth.models import User

import Users

class UserAdmin(admin.ModelAdmin):
    model = User

# Register your models here.

# admin.site.register(Users)

