from django.urls import path, include
from .views import AvailableRoomsView
from rest_framework.routers import DefaultRouter
from .views import PropViewSet, HotelViewSet, RoomViewSet, BookingCreateView, MonthlyBillView

router = DefaultRouter()
router.register(r'property', PropViewSet)
router.register(r'hotels', HotelViewSet)
router.register(r'rooms', RoomViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    path('api/rooms/available/', AvailableRoomsView.as_view(), name='available-rooms'),
    path('api/bookings/', BookingCreateView.as_view(), name='booking-list-create'),
    path('api/monthly-bills/', MonthlyBillView.as_view(), name='monthly-bills'),
]
