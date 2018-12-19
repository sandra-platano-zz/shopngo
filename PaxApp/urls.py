from django.conf.urls import url

from .views import GenericUserPage, UserPageWithFlightNumber, GiftPage, TestPage

urlpatterns = [
    url(r'^$', GenericUserPage, name='GenericUserForm'),
    url('^test$', TestPage, name='TestPage'),
    url(r'promomotion$', GiftPage, name='Gift'),
    url(r'(?P<flight_number>([A-Z]{2}|[A-Z]\d|\d[A-Z])\s?\d{3,4})\/?$', UserPageWithFlightNumber, name='UserPageWithFlightNumber'),

]
