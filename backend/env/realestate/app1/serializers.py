from rest_framework import serializers
from .models import Property

class Propserializers(serializers.ModelSerializer):
    class Meta:
        model=Property
        fields='__all__'