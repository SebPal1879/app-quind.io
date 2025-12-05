from rest_framework import serializers

from .models import Paquete

class Paquete(serializers.ModelSerializer):
  class Meta:
    model = Paquete
    fields = ('id','nombre','direccion','estado','fecha_creacion') 