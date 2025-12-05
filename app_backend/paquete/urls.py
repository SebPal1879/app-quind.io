from django.urls import path

from .views import PaquetesView, BuscarIDPaqueteView

urlpatterns = [
  path("",PaquetesView.as_view(),name="agregar_paquete"),
  path("<int:paquete_id>/", BuscarIDPaqueteView.as_view(),name="buscar_paquete")
]