from django.core.exceptions import ObjectDoesNotExist

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response

from .models import Paquete
from .serializers import PaqueteSerializer

# Create your views here.
class PaquetesView(APIView):
  def get(self, request):
    paquetes = Paquete.objects.all()
    if not paquetes:
      return Response(data={"Mensaje": "No se ha encontrado ningún paquete"},status=status.HTTP_404_NOT_FOUND)
    paquetes_serializer = PaqueteSerializer(paquetes, many=True)
    return Response(data=paquetes_serializer.data,status=status.HTTP_200_OK)
    
  def post(self,request):
    info_paquete = request.data
    print(info_paquete)
    try:
      Paquete.objects.create(**info_paquete)
    except Exception as e:
      print(e)
      return Response(data={"Error": "No se pudo crear el paquete"},status=status.HTTP_500_INTERNAL_SERVER_ERROR )
    
    return Response(data={"Mensaje": "Paquete creado exitosamente"},status=status.HTTP_201_CREATED)
  
class BuscarIDPaqueteView(APIView):
  def get(self,request,paquete_id):
    try:
      paquete = Paquete.objects.get(pk=paquete_id)
    except ObjectDoesNotExist:
      return Response(data={"Error": "No existe el paquete buscado"})
    paquete_serializer = PaqueteSerializer(paquete)
    return Response(data=paquete_serializer.data, status=status.HTTP_200_OK)
  
