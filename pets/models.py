from django.db import models

class Pet(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    breed = models.CharField(max_length=100)
    owner_email = models.EmailField()

    def __str__(self):
        return self.name
