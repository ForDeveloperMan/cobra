(function ($) {
function initMap() 
{
	let initMain = false;
	function setMapMain(){
	  const uluru = { lat: 55.75699645963315, lng: 37.61750863348657 };
	  var locations = [
		  ['Офис', 55.75699645963315, 37.61750863348657, '../img/map/locate.svg', '../img/map/locate_active.svg'],
		  ['Школа', 55.75772423980458, 37.60503118554516, '../img/map/school.svg', '../img/map/school_active.svg'],
		];
	  const map = new google.maps.Map(document.getElementById("map"), {
	    zoom: 14,
	    center: uluru,
	    styles: [
			  {
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#212121"
			      }
			    ]
			  },
			  {
			    "elementType": "labels",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.icon",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#212121"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.country",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#9e9e9e"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.land_parcel",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.locality",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#bdbdbd"
			      }
			    ]
			  },
			  {
			    "featureType": "administrative.neighborhood",
			    "stylers": [
			      {
			        "visibility": "off"
			      }
			    ]
			  },
			  {
			    "featureType": "poi",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#181818"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "poi.park",
			    "elementType": "labels.text.stroke",
			    "stylers": [
			      {
			        "color": "#1b1b1b"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "geometry.fill",
			    "stylers": [
			      {
			        "color": "#2c2c2c"
			      }
			    ]
			  },
			  {
			    "featureType": "road",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#8a8a8a"
			      }
			    ]
			  },
			  {
			    "featureType": "road.arterial",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#373737"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#3c3c3c"
			      }
			    ]
			  },
			  {
			    "featureType": "road.highway.controlled_access",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#4e4e4e"
			      }
			    ]
			  },
			  {
			    "featureType": "road.local",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#616161"
			      }
			    ]
			  },
			  {
			    "featureType": "transit",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#757575"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "geometry",
			    "stylers": [
			      {
			        "color": "#000000"
			      }
			    ]
			  },
			  {
			    "featureType": "water",
			    "elementType": "labels.text.fill",
			    "stylers": [
			      {
			        "color": "#3d3d3d"
			      }
			    ]
			  }
		]
	  });

	  	var infowindow = new google.maps.InfoWindow();
	  	var marker, i;
		for (i = 0; i < locations.length; i++) {  
			marker = new google.maps.Marker({
				map: map,
				position: new google.maps.LatLng(locations[i][1], locations[i][2]),
				icon: locations[i][3],
			});
			google.maps.event.addListener(marker, 'click', (function(marker, i) {
				return function() {
				  let content = '<div class="map-info"><img src="'+locations[i][4]+'" alt="" class="map-info__icon"><div class="map-info__text">'+locations[i][0]+'</div></div>';
				  infowindow.setContent(content);
				  infowindow.open(map, marker);
				}
			})(marker, i));
		}
	}
	$(window).scroll(function() {
		if ( ( $(window).scrollTop() + $(window).height() ) >= $('.sec-locate').offset().top ) {
			if ( !initMain ) {
				initMain = true;
				setMapMain();
			}
		}
	});
	if ( ( $(window).scrollTop() + $(window).height() ) >= $('.sec-locate').offset().top ) {
		if ( !initMain ) {
			initMain = true;
			setMapMain();
		}
	}
}
})(jQuery);