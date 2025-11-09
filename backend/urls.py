from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse
from django.http import JsonResponse

def home(request):
    return JsonResponse({'message': 'PetCare Backend is running!'})

urlpatterns = [
    path('', home),
    # ... your other paths
]


def home(request):
    return HttpResponse("Welcome to PetCare Portal Backend!")

urlpatterns = [
    path('', home),  # 👈 Root URL
    path('admin/', admin.site.urls),
    path('api/', include('pets.urls')),
]
