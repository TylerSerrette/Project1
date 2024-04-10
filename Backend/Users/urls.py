from django.urls import path, include
from Users.views import UserViewset

urlpatterns = [
    path('api/create_user/', UserViewset.as_view(), name='create_user'),
]
