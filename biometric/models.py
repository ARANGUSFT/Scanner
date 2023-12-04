from django.db import models

# Create your models here.
class Person(models.Model):
    name = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    position = models.CharField(max_length=100)
    identification = models.CharField(max_length=100)
    facial = models.ImageField(upload_to='facial_scan/')