from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
# from django.http import HttpResponseRedirect as redirect
from django.shortcuts import redirect


class sendData:
    sendData = ""


sd = sendData


def home(request):
    return render(request, 'django_app/home.html')


def first(request):
    if (request.user.is_authenticated):
        return redirect('https://4402704e.eu.ngrok.io/')
    else:
        return render(request, 'django_app/home.html')


def index(request):
    return render(request, 'zMusicStudio/index.html')


def single(request):
    return render(request, 'zMusicStudio/single.html')


def galery(request):
    return render(request, 'zMusicStudio/gallery.html')


def contact(request):
    return render(request, 'zMusicStudio/contact.html')


def index_r(request):
    return render(request, 'zMusicStudio/index_r.html')


def single_r(request):
    return render(request, 'zMusicStudio/single_r.html')


def galery_r(request):
    return render(request, 'zMusicStudio/gallery_r.html')


def contact_r(request):
    return render(request, 'zMusicStudio/contact_r.html')


def login(request):
    return redirect('https://564b96d6.eu.ngrok.io/')


@csrf_exempt
def esp32connect(request):
    if request.method == "POST":
        sd.sendData = request.body
    return HttpResponse(sd.sendData)


def readADC(request):
    return HttpResponse(sd.sendData)
