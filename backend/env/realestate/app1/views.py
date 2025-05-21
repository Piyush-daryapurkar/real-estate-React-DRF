from rest_framework import viewsets, generics
from .models import Property, Hotel, Room, Booking, MonthlyBill
from .serializers import (
    Propserializers, HotelSerializer, RoomSerializer, BookingSerializer, MonthlyBillSerializer
)

# Property ViewSet
class PropViewSet(viewsets.ModelViewSet):
    queryset = Property.objects.all()
    serializer_class = Propserializers

# Hotel ViewSet
class HotelViewSet(viewsets.ModelViewSet):
    queryset = Hotel.objects.all()
    serializer_class = HotelSerializer

# Room ViewSet
class RoomViewSet(viewsets.ModelViewSet):
    queryset = Room.objects.all()
    serializer_class = RoomSerializer

# Booking Create and List API
class BookingCreateView(generics.ListCreateAPIView):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer

# Monthly Bill List API
class MonthlyBillView(generics.ListAPIView):
    queryset = MonthlyBill.objects.all()
    serializer_class = MonthlyBillSerializer

# Example: Available rooms API
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.utils.timezone import now

class AvailableRoomsView(APIView):
    def get(self, request):
        # Get rooms where available = True and is_pg = False (example logic)
        rooms = Room.objects.filter(is_pg=False)  # add your availability logic here
        serializer = RoomSerializer(rooms, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
