from django.contrib import admin
from django.urls import path
from products.views import ProductListCreateView, ProductFormView, home_view
from products.views import ProductDetailView

urlpatterns = [
    path('api/products/<int:pk>/', ProductDetailView.as_view()),  # ✅ Detail view for edit/delete
    path('', home_view),  # Optional homepage
    path('admin/', admin.site.urls),
    path('api/products/', ProductListCreateView.as_view()),
    path('productui/', ProductFormView.as_view()),  # ✅ Form route
]
