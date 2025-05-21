from rest_framework import serializers
from .models import Property
from .models import Hotel, Room, Booking, MonthlyBill


class Propserializers(serializers.ModelSerializer):
    class Meta:
        model=Property
        fields='__all__'


# booking/serializers.py
from rest_framework import serializers
from .models import Hotel, Room, Booking, MonthlyBill

class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hotel
        fields = '__all__'

class RoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Room
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = '__all__'

class MonthlyBillSerializer(serializers.ModelSerializer):
    class Meta:
        model = MonthlyBill
        fields = '__all__'

