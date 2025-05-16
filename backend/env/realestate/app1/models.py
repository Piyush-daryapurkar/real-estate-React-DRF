from django.db import models

class Property(models.Model):
    PROPERTY_TYPE_CHOICES = [
        ('apartment', 'Apartment'),
        ('house', 'House'),
        ('villa', 'Villa'),
        ('plot', 'Plot'),
        ('commercial', 'Commercial'),
    ]
    
    title = models.CharField(max_length=200)
    description = models.TextField()
    property_type = models.CharField(max_length=20, choices=PROPERTY_TYPE_CHOICES)
    price = models.DecimalField(max_digits=12, decimal_places=2)
    location = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zipcode = models.CharField(max_length=10)
    bedrooms = models.PositiveIntegerField()
    bathrooms = models.PositiveIntegerField()
    area_sqft = models.FloatField()
    image = models.ImageField(upload_to='property_images/', blank=True, null=True)
    available = models.BooleanField(default=True)
    date_posted = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.title
