from django.contrib import admin
from .models import Property,Hotel,Room,Booking,MonthlyBill

# Register your models here.

admin.site.register(Property)
admin.site.register(Hotel)
admin.site.register(Room)
admin.site.register(Booking)
admin.site.register(MonthlyBill)


