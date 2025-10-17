from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2)
    description = models.TextField()
    image_url = models.URLField()


class Pet(models.Model):
    name = models.CharField(max_length=100)
    age = models.IntegerField()
    breed = models.CharField(max_length=100)
    owner_email = models.EmailField()
    created_at = models.DateTimeField(auto_now_add=True)  # ✅ Pet registration timestamp

    def __str__(self):
        return f"{self.name} ({self.breed})"

    class Meta:
        ordering = ['-created_at']  # ✅ Latest pets first
        verbose_name = 'Pet'
        verbose_name_plural = 'Pets'
