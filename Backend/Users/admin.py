from django.contrib import admin
from django.contrib.auth.models import User
from Users.models import UserProfile

class UserAdmin(admin.ModelAdmin):
    model = User
    
class UserProfileAdmin(admin.ModelAdmin):
    pass
# Register your models here.

admin.site.register(User)
admin.site.register(UserProfile)
