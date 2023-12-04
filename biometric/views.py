from django.shortcuts import render


def list(request):
    return render(request,'list.html')

def register(request):
    return render(request,'register.html')

def update(request):
    return render(request,'update.html')
