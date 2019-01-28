(function() {
		"use strict";

		// custom scrollbar

		$("html").niceScroll({styler:"fb",cursorcolor:"#831AF9", cursorwidth: '4', cursorborderradius: '10px', background: '#FFFFFF', spacebarenabled:false, cursorborder: '0',	zindex: '1000'});

		$(".scrollbar1").niceScroll({styler:"fb",cursorcolor:"#831AF9", cursorwidth: '4', cursorborderradius: '0',autohidemode: 'false', background: '#FFFFFF', spacebarenabled:false, cursorborder: '0'});

	
	
		$(".scrollbar1").getNiceScroll();
		if ($('body').hasClass('scrollbar1-collapsed')) {
				$(".scrollbar1").getNiceScroll().hide();
		}

})(jQuery);

							 
		 
$(document).ready(function() {
	$('.menu-link').bigSlide();
		this.$menu = $('#menu');
		this.$push = $('.push');
		var bigSlideAPI = ($('.menu-link').bigSlide()).bigSlideAPI;
		$('.toSection').click(function() {
			bigSlideAPI.view.toggleClose();
		});
 });

// Set the date we're counting down to
var countDownDate = new Date(new Date().valueOf()+1000*3600+1000*40*60);
var foundFlight = false;

document.addEventListener('keydown', function (e) {
  if((e.keycode == 13 || e.which == 13)&& !(foundFlight)) {
    // enter pressed
    console.log("entrée pressée")

    onSubmit();
    return false;
  }
});

//----------------------------------------------------------

$(document).ready(function() {
	$('.menu-link').bigSlide();
		this.$menu = $('#menu');
		this.$push = $('.push');
		var bigSlideAPI = ($('.menu-link').bigSlide()).bigSlideAPI;
		$('.toSection').click(function() {
			bigSlideAPI.view.toggleClose();
		});
 });





function updatePageInfo(responseText){
	var statusBox=document.getElementById('informationBox')
    console.log("updating")
    response=JSON.parse(responseText)

	// We found your flight
	// Let's change the webpage
	if(response.found){
	    console.log('Found Flight !')
	    foundFlight = true;



        // changing background image
		$('.flightImage').css("background", "url(static/images/enfant_volant.png) center center no-repeat");

		// Suppression des messages dans le statut
		while (statusBox.firstChild) {
				statusBox.removeChild(statusBox.firstChild);
		}

		if (response.delay_duration!==null){
		// YOUR FLIGHT IS DELAYED
		var para = document.createElement("h5");
		para.setAttribute('class', 'head_section');
		para.setAttribute('id', 'flightNumber');
		var node = document.createTextNode("SORRY, YOUR FLIGHT IS DELAYED");
		para.appendChild(node);

		statusBox.appendChild(para);

		// SORRY
		var para = document.createElement("h5");
		para.setAttribute('class', 'status');
		para.setAttribute('id', 'flightNumber');
		var node = document.createTextNode("I’LL TAKE CARE OF YOU DURING YOUR WAITING TIME");
		para.appendChild(node);

		statusBox.appendChild(para);

		var para = document.createElement("h5");
		para.setAttribute('class', 'status');
		para.setAttribute('id', 'flightNumber');
		var node = document.createTextNode("PLEASE FIND BELOW YOUR LIVE FLIGHT INFORMATION");
		para.appendChild(node);

		statusBox.appendChild(para);

        var para = document.createElement("H5");
		para.setAttribute('class', 'status');
		para.setAttribute('id', 'flightNumber');
		var node = document.createTextNode("Planned Departure Time :"+ response.expected_departure_time);
		para.appendChild(node);

		statusBox.appendChild(para);


		var para = document.createElement("h5");
		para.setAttribute('class', 'status');
		para.setAttribute('id', 'flightNumber');
		var node = document.createTextNode("New expected Departure Time :"+response.estimated_departure_time);
		para.appendChild(node);

		statusBox.appendChild(para);

		var para = document.createElement("h5");
		para.setAttribute('class', 'status');
		para.setAttribute('id', 'flightNumber');
		var node = document.createTextNode("Boarding gate:"+response.gate_number+" (Terminal "+response.terminal_number+")");
		para.appendChild(node);

		statusBox.appendChild(para);

		var para = document.createElement("h4");
		para.setAttribute('class', 'status');
		para.setAttribute('id', 'flightNumber');
		var node = document.createTextNode("BECAUSE NO TIME SHOULD BE WASTED, I HAVE A GIFT FOR YOU… ");
		para.appendChild(node);

		statusBox.appendChild(para);


        // Buttons
        var container = document.createElement("div")
        container.className="container"

        $('#informationBox').append(container)

        var row = document.createElement('div')
        row.className='row'
        container.append(row)


        var para=document.createElement("div")
        para.className='col-sm-2'

        row.append(para)


        var para=document.createElement("a")
        para.className='btn btn-default col-sm-8 col-md-2'
        para.setAttribute('href','#promo-section')
        para.style="color: blue;"
        var node = document.createTextNode('EXCLUSIVE OFFERS')
        para.appendChild(node)
        row.append(para)

        var para=document.createElement("div")
        para.setAttribute('class','col-sm-2')

        row.append(para)

        var para=document.createElement("div")
        para.setAttribute('class','col-sm-2')

        row.append(para);
//
        /*var para=document.createElement("a")
        para.setAttribute('class','btn btn-default col-sm-8 col-md-2')
        para.setAttribute('href','#example-section')
        para.style="color: blue;"
        var node = document.createTextNode('UNIQUE EXPERIENCES')
        para.appendChild(node);
        row.append(para);*/


		}
	else{
	    // YOUR FLIGHT IS ON TIME
		var para = document.createElement("h4");
		para.setAttribute('class', 'status');
		para.setAttribute('id', 'flightNumber');
		var node = document.createTextNode("YOUR FLIGHT IS ON TIME!");
		para.appendChild(node);

		statusBox.appendChild(para);

		// PLEASE
		var para = document.createElement("h4");
		para.setAttribute('class', 'status');
		para.setAttribute('id', 'flightInfo');
		var node = document.createTextNode("PLEASE FIND BELOW YOUR FLIGHT INFORMATION");

		para.appendChild(node);

		statusBox.appendChild(para);
        console.log(response.delay_duration)

        // Expecting Departure
		var para = document.createElement("h5");
		para.setAttribute('class', 'status');
		para.setAttribute('id', 'flightInfo');
		var node = document.createTextNode("Departure time : "+response.estimated_departure_time);

		para.appendChild(node);

		statusBox.appendChild(para);
        console.log(response.delay_duration)

		// Boarding Gate text
		var para = document.createElement("h5");
		para.setAttribute('class', 'status');
		para.setAttribute('id', 'gateInfo');
		var node = document.createTextNode("Gate :"+response.gate_number+" (Terminal "+response.terminal_number+")");
		para.appendChild(node);

		statusBox.appendChild(para);
		}



		// When flight is delayed, we push promotions !
		if (true || response.delay_duration!==null){




            ShowPromotion()
            // To add a countdown for offers

            // Hypothesis : flight the same day
            var nb_hour=parseInt(response.estimated_departure_time.match(/(\d+):/)[1]);
            var nb_min=parseInt(response.estimated_departure_time.match(/:(\d+)/)[1]);
            var now = new Date;

            var distance_min = 60*(nb_hour- new Date().getHours())+nb_min-new Date().getMinutes();
            var countDownDate = new Date(new Date().getTime() + 60000*(distance_min-30));
            promotionCountDown(countDownDate);

		}
	}

	// Sorry, we didn't find your flight
	else{
	    console.log('Not found flight')
		$('#sorryMessage').text("We didn't find your flight, please try again!")

        // Showing button, and hiding loader
        $('.statusBouton').show()
        $('#formLoader').hide()
	}

}

// click sur le formulaire
function onSubmit(){
    location.href=window.location.origin +'/'+ $('#inputFlightNumber').val();
    return false;
}

// Envoie le formulaire
function sendForm(){
	// flight number
	var url = new URL(window.location.href)
    var flightNumber = url.pathname.substr(1)

	// Hiding button, and showing loader
	$('.statusBouton').hide()
	$('#formLoader').show()

	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200){
            console.log("ready to update page info");
            // confirm("that's the response info :"+ xmlHttp.responseText);
            updatePageInfo(xmlHttp.responseText);
        }

    }

    flightStatusUrl=window.location.protocol+"//"+window.location.host+"/flightinfo?flight_number="+flightNumber
    xmlHttp.open("GET", flightStatusUrl, true); // true for asynchronous
    xmlHttp.send(null);
}

function promotionCountDown(countDownDate){

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now an the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in an element with id="shoppingCountDown"
        if(hours >0){
            $("#shoppingCountDown").text(hours + "h "+ ('00'+minutes).slice(-2) + "min left to enjoy those offers!");
        }else{
            $("#shoppingCountDown").text(minutes + "min left to enjoy those offers!");
        }


        // If the count down is finished, write some text
        if (distance < 0) {
            $("#shoppingCountDown").text('');
        }
    }, 1000);
    };

function ShowPromotion(){

    // Affichage des promotions
    $('#promo-section').show()
    $('#example-section').show()


}