from bs4 import BeautifulSoup
from requests import get
import re

# Flights
ORLY_DEPARTURE_URL = 'https://www.flightstats.com/go/weblet?guid=e0b4268329e1b884:6973da7e:14b50a6af6d:-18d3&weblet=status&action=AirportFlightStatus&airportCode=ORY&airportQueryTimePeriod='
CDG_DEPARTURE_URL = 'https://www.flightstats.com/go/weblet?guid=e0b4268329e1b884:6973da7e:14b50a6af6d:-18d3&weblet=status&action=AirportFlightStatus&airportCode=CDG&airportQueryTimePeriod='

def searchByFlightNumber(flight_number):
    for i in range(8, 0, -1):

        # HTML page with all flights from Orly
        html_doc = get(ORLY_DEPARTURE_URL+str(i)).content

        soup = BeautifulSoup(html_doc, 'html.parser')

        table_flights = soup.find_all('table')[4]

        rows = table_flights.find_all('tr')

        # We skip the first line (header)
        for row in rows[1:]:

            cols = row.find_all('td')
            cur_flight_number, airline, destination, expected_departure_time, status = map(
                lambda s: s.text.strip().replace('\n', '').replace('\t', '').replace('\r', '').replace('^', ''),
                cols)

            # Check if you have found our flight
            if cur_flight_number.replace(' ', '') == flight_number.replace(' ', ''):
                flight_info_url = cols[4].a['href']
                html_doc = get(flight_info_url).content
                soup = BeautifulSoup(html_doc, 'html.parser')

                gate_number = infoFinder(soup, "Gate")
                terminal_number = infoFinder(soup, "Terminal")
                estimated_departure = infoFinder(soup, "Estimated")
                delay_duration = delayFinder(soup)

                # You have found our flight !
                return {'found': True,
                        'flight_number': cur_flight_number,
                        'airline': airline,
                        'destination': destination,
                        'expected_departure_time': expected_departure_time,
                        'estimated_departure_time': estimated_departure,
                        'terminal_number': terminal_number,
                        'gate_number': gate_number,
                        'delay_duration': delay_duration
                        }

    # We haven't found our flight
    return {'found': False}


def infoFinder(soup, sectionTitle):
    try:
        return list(soup.findAll(text=sectionTitle)[0].parent.parent.children)[1].text
    except:
        return None


def delayFinder(soup):
    if soup.find(text=re.compile("Delayed by")) is not None:
        return re.search(r'(\d+\w\s\d+\w|\d+\w)', soup.find(text=re.compile("Delayed by"))).group(1)


if __name__ == '__main__':
    print(searchByFlightNumber('G3 8509'))
    #print(searchByFlightNumber('U25536'))
    """import cProfile

    cProfile.run("searchByFlightNumber('XK1100')")"""
