from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import UserSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

class UserCreate(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'username': user.username
        })
  

# user = authenticate(username=username, password=password)


# Steps to Use authenticate in Your Django App:
# Import the authenticate function: As shown in the example, you start by importing authenticate from django.contrib.auth.

# Collect User Credentials: Typically, you'll collect the username and password from a login form submitted via a POST request. In a RESTful API, these might come from a JSON payload.

# Call authenticate with Credentials: Pass the username and password to authenticate. Optionally, you can pass the request object if your authentication backend requires it (e.g., for session-based authentication).

# Check the Result: If authenticate returns a User object, the credentials are valid. You can then log the user in using Django's login function, which attaches the user to the current session. If it returns None, the credentials are invalid.

# Handle the Response: Depending on the authentication result, you can redirect the user to another page, return a success message, or show an error message.


# def my_login_view(request):
#     # This example assumes you're using a POST request with 'username' and 'password' fields
#     username = request.POST.get('username')
#     password = request.POST.get('password')
    
#     user = authenticate(request, username=username, password=password)
    
#     if user is not None:
#         # If credentials are correct, log the user in (i.e., attach the user to the session)
#         login(request, user)
#         return HttpResponse("You're logged in.")
#     else:
#         # If credentials are incorrect, return an error message
#         return HttpResponse("Invalid login.")