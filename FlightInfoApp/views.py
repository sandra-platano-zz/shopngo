from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .engine import searchByFlightNumber

# Create your views here.
@api_view(['GET'])
def FlightInfo(request):
    print("in flight info view")
    print(request.GET)
    if request.method =="GET":
        response_data=searchByFlightNumber(request.GET.dict()['flight_number'])
        return Response(response_data)