from rest_framework.generics import ListCreateAPIView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.renderers import TemplateHTMLRenderer
from django.shortcuts import redirect
from django.http import JsonResponse
from .models import Product
from .serializers import ProductSerializer
from rest_framework.generics import RetrieveUpdateDestroyAPIView

class ProductDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


# ✅ API view
class ProductListCreateView(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

# ✅ HTML form view
class ProductFormView(APIView):
    renderer_classes = [TemplateHTMLRenderer]

    def get(self, request):
        return Response(template_name='product_form.html')

    def post(self, request):
        name = request.data.get('name')
        price = request.data.get('price')
        description = request.data.get('description')
        image_url = request.data.get('image_url')

        if name and price and description:
            Product.objects.create(
                name=name,
                price=price,
                description=description,
                image_url=image_url
            )
            return redirect('/productui/')

        return Response(template_name='product_form.html', status=400)

# ✅ Dummy homepage view
def home_view(request):
    return JsonResponse({"message": "Welcome to Bark Buds API"})
