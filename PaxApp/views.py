from django.shortcuts import render


# Create your views here.
def GenericUserPage(request):
    return render(request, 'template_v3.html')


def UserPageWithFlightNumber(request, flight_number=None):
    return render(request, 'UserPageWithFlightNumber.html', context={'flight_number': flight_number})


def GiftPage(request):
    return render(request, 'gift.html')

def TestPage(request):
    return render(request, 'test.html')