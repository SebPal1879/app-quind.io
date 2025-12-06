from django.urls import path

from .views import PaquetesView, BuscarIDPaqueteView, ActualizarPaqueteView

urlpatterns = [
  path("",PaquetesView.as_view(),name="agregar_paquete"),
  path("<int:paquete_id>/", BuscarIDPaqueteView.as_view(),name="buscar_paquete"),
  path("<int:paquete_id>/estado/",ActualizarPaqueteView.as_view(),name="actualizar_paquete")
]