from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter
from .views import PropViewSet

router=DefaultRouter()
router.register(r'property',PropViewSet)

urlpatterns = [
    path('api/',include(router.urls))
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
