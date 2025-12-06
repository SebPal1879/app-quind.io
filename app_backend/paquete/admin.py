from django.contrib import admin

from .models import Paquete

from fsm_admin.mixins import FSMTransitionMixin

# Register your models here.

class PaqueteAdmin(FSMTransitionMixin,admin.ModelAdmin):
  fsm_field = ["estado",]
  readonly_fields = ("estado",)


admin.site.register(Paquete, PaqueteAdmin)