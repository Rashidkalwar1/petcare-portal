from django.contrib import admin
from .models import Pet

class PetAdmin(admin.ModelAdmin):
    list_display = ('name', 'breed', 'age', 'owner_email', 'created_at')
    search_fields = ('name', 'breed', 'owner_email')

admin.site.register(Pet, PetAdmin)
