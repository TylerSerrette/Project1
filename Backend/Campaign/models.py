from django.db import models
from  Character.models import Character

# Create your models here.

class Campaign(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=500)
    characters = models.ManyToManyField(Character, blank=True)
    def __str__(self):
        return self.name
    def __str__(self):
        return self.name
