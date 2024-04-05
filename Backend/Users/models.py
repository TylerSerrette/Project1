from django.contrib.auth.models import User
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    is_dm = models.BooleanField(default=False, verbose_name='Is Dungeon Master')
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    # Additional fields specific to D&D
    favorite_campaign = models.CharField(max_length=255, null=True, blank=True)

    # Automatically create or update a user profile when a user is created or saved
    @receiver(post_save, sender=User)
    def create_or_update_user_profile(sender, instance, created, **kwargs):
        if created:
            UserProfile.objects.create(user=instance)
        else:
            instance.userprofile.save()

    

# Create your models here.
