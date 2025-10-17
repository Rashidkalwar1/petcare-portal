from django.urls import path
from .views import register_pet, list_pets

urlpatterns = [
    path('register/', register_pet),
    path('list/', list_pets),
    path('api/', include('pets.urls')),
]
