from django.test import TestCase
from .models import Pet

class PetModelTest(TestCase):
    def test_pet_str(self):
        pet = Pet(name="Tommy", age=3, breed="Labrador", owner_email="test@example.com")
        self.assertEqual(str(pet), "Tommy (Labrador)")
