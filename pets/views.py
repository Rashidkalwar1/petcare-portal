from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Pet
from .serializers import PetSerializer

@api_view(['POST'])
def register_pet(request):
    if request.method == 'GET':
        return Response({"detail": "Use POST to register a pet."})
    
    data = request.data
    Pet.objects.create(
        name=data['name'],
        age=data['age'],
        breed=data['breed'],
        owner_email=data['owner_email']
    )
    return Response({'message': 'Pet registered successfully'})

@api_view(['GET'])
def list_pets(request):
    pets = Pet.objects.all()
    serializer = PetSerializer(pets, many=True)
    return Response(serializer.data)
