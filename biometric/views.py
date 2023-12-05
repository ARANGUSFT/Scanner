from django.shortcuts import render,redirect
from biometric.models import Person


def list(request):
    return render(request,'list.html')


def register(request):
    if request.method == "POST":
        
        user = Person()
        user.name = request.POST.get('name')
        user.lastname = request.POST.get('lastname')
        user.position = request.POST.get('position')
        user.identification = request.POST.get('identificate')
        user.facial = request.FILES['facial']
        user.save()
        
        return redirect('list')
    else:
        return render(request,'register.html')


def update(request):
    return render(request,'update.html')
