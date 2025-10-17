from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Pet
from .serializers import PetSerializer

@api_view(['POST'])
def register_pet(request):
    serializer = PetSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Pet registered successfully'})
    return Response(serializer.errors, status=400)

@api_view(['GET'])
def list_pets(request):
    pets = Pet.objects.all()
    serializer = PetSerializer(pets, many=True)
    return Response(serializer.data)
return Response({'message': 'Pet registered successfully', 'data': serializer.data})
