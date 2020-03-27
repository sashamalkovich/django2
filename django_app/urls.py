"""django2 URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django_app import views
from django.contrib.auth import views as view
from django.urls import path

urlpatterns = [

    path('', views.home, name='home'),
    path('admin/', admin.site.urls),
    path('first/', views.first),
    path('esp32connect/', views.esp32connect),
    path('first/readADC/', views.readADC),
    path('login/', view.LoginView.as_view(), name='login'),
    path('index.html', views.index),
    path('single.html', views.single),
    path('gallery.html', views.galery),
    path('contact.html', views.contact),
    path('index_r.html', views.index_r),
    path('single_r.html', views.single_r),
    path('gallery_r.html', views.galery_r),
    path('contact_r.html', views.contact_r),

]
