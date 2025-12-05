from django.db import models


class Paquete(models.Model):

  ESTADO_CHOICES = [
    ("CREADO", "Creado"),
    ("EN_TRANSITO", "En tránsito"),
    ("ENTREGADO", "Entregado")
  ]

  nombre_destinatario = models.CharField(null=False,max_length=120)
  direccion = models.CharField(null=False,max_length=120)
  estado = models.CharField(null=False,max_length=120,choices=ESTADO_CHOICES)
  fecha_creacion = models.DateTimeField(null=False,auto_now_add=True)