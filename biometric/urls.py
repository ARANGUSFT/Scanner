from django.urls import path
# importo donde van a estar las views y luego traigo el archivo de las vistas para asi llamar la funcion que necesite
from . import views


urlpatterns = [
    path('Listado', views.list, name="list"),
    path('Registro', views.register, name="register"),
    path('Actualizar', views.update, name="update")
]