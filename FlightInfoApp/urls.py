from django.conf.urls import url

from .views import FlightInfo

urlpatterns=[
    url(r'', FlightInfo, name='FlightInfo'),
]