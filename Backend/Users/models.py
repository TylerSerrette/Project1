from django.contrib.auth.models import User
from django.db import models

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    campaigns = models.ManyToManyField('Campaign', blank=True)
    characters = models.ManyToManyField('Character', blank=True)
    
    
    def __str__(self):
        return self.user.username
    def __str__(self):
        return self.user.username
    

