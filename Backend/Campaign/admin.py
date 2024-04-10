from django.contrib import admin
from Campaign.models import Campaign
# Register your models here.
class CampaignAdmin(admin.ModelAdmin):
    model = Campaign

admin.site.register(Campaign, CampaignAdmin)
