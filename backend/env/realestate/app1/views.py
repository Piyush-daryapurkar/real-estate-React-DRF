from django.shortcuts import render
from rest_framework import viewsets
from .models import Property
from .serializers import Propserializers

# Create your views here.

class PropViewSet(viewsets.ModelViewSet):
    queryset=Property.objects.all()
    serializer_class=Propserializers