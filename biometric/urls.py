from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
# importo donde van a estar las views y luego traigo el archivo de las vistas para asi llamar la funcion que necesite
from . import views


urlpatterns = [
    path('Listado', views.list, name="list"),
    path('Registro', views.register, name="register"),
    path('Actualizar', views.update, name="update")
]

#Permite renderizar las imagenes
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)