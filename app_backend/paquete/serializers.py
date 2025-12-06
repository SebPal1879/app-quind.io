from rest_framework import serializers

from .models import Paquete

class PaqueteSerializer(serializers.ModelSerializer):
  estado = serializers.SerializerMethodField()

  class Meta:
    model = Paquete
    fields = ('id','nombre_destinatario','direccion','estado','fecha_creacion')

  def get_estado(self,obj):
    return obj.get_estado_display()
  
