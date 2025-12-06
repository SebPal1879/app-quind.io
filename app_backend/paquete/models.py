from django.db import models 
from django_fsm import FSMField, transition

class Estado(models.TextChoices): 
  CREADO = "CREADO", "Creado", 
  EN_TRANSITO = "EN_TRANSITO", "En tránsito", 
  ENTREGADO = "ENTREGADO", "Entregado"
  

class Paquete(models.Model):

  nombre_destinatario = models.CharField(null=False,max_length=120)
  direccion = models.CharField(null=False,max_length=120)
  estado = FSMField(choices=Estado.choices,default=Estado.CREADO,protected=True)
  fecha_creacion = models.DateTimeField(null=False,auto_now_add=True)
  
  def __str__(self):
    return "Dirección: {}, nombre destinatario: {}".format(self.direccion, self.nombre_destinatario)


  @transition(field=estado,source=Estado.CREADO,target=Estado.EN_TRANSITO)
  def mover(self):
    pass

  @transition(field=estado,source=Estado.EN_TRANSITO,target=Estado.ENTREGADO)
  def entregar(self):
    pass