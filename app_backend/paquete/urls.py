from django.urls import path

from .views import AgregarPaqueteView

urlpatterns = [
  path("",AgregarPaqueteView.as_view(),name="agregar_paquete")
]