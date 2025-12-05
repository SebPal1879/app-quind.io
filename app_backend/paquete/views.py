from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

from .models import Paquete

# Create your views here.
class AgregarPaqueteView(APIView):
  def post(self,request):
    info_paquete = request.data
    print(info_paquete)
    try:
      Paquete.objects.create(**info_paquete)
    except Exception as e:
      print(e)
      return Response(data={"Error": "No se pudo crear el paquete"},status=status.HTTP_500_INTERNAL_SERVER_ERROR )
    
    return Response(data={"Mensaje": "Paquete creado exitosamente"},status=status.HTTP_201_CREATED)