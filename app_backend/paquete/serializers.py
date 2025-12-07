from rest_framework import serializers

from .models import Paquete

class PaqueteSerializer(serializers.ModelSerializer):
  estado = serializers.SerializerMethodField()
  fecha_creacion = serializers.SerializerMethodField()

  class Meta:
    model = Paquete
    fields = ('id','nombre_destinatario','direccion','estado','fecha_creacion')

  def get_estado(self,obj):
    return obj.get_estado_display()
  
  def get_fecha_creacion(self,obj):
    return obj.fecha_creacion.date()
  
