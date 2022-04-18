var map, inter, markers, locations, labels, openwindow, clusterStyles, markerCluster;
var infowindows=new Array();
function initMap() {
  map=new google.maps.Map(document.getElementById("mapContact"),{center:{lat:51.99841,lng:19.533691},zoom:6,styles:
  [
      {
          "featureType": "all",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "weight": "2.00"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#9c9c9c"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text",
          "stylers": [
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#3c3c3c"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#f2f2f2"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "all",
          "stylers": [
              {
                  "saturation": -100
              },
              {
                  "lightness": 45
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#e6e6e6"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#3c3c3c"
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "simplified"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "all",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#46bcec"
              },
              {
                  "visibility": "on"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
              {
                  "color": "#cacaca"
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#3c3c3c"
              }
          ]
      }
  ]
});


  // utworzenie wektora pozycji z bazy
  locations = [{lat:52.179,lng:21.0281},{lat:52.2554,lng:21.0418},{lat:52.19,lng:20.9516},{lat:50.8672,lng:20.6357},{lat:50.8597,lng:20.6379},{lat:50.0431,lng:19.9257},{lat:50.2597,lng:19.0133},{lat:52.392,lng:16.8454},{lat:51.093,lng:16.9802},{lat:54.3856,lng:18.5923}  ]





  labels = '';
  markers = locations.map(function(location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
      icon: {
        anchor: new google.maps.Point(13, 39),
        size: new google.maps.Size(100,102),
        url: 'https://rednetdom.pl/img/marker-c.svg?1.92'
      },
      draggable: false
    });
  });

  openwindow;
               infowindows[0] = new google.maps.InfoWindow({
              content: '<div class="mapPopup">'+
              '<div><h4>redNet Dom Sp. z o.o.</h4></div><div>ul. Bukowińska 2 lok. U5</div>'+
              '<div>02-703 Warszawa</div>'+
              '<div>tel.: 22 403 94 20</div>'+
              '<div>e-mail: <a href="mailto:info@rednetdom.pl">info@rednetdom.pl</a></div>'+
              '<div><a href="https://rednetdom.pl" target="_blank">www.rednetdom.pl</a></div>'+
              '</div>',
              maxWidth: 400,
              pixelOffset: new google.maps.Size(-37,-4)
          });
         google.maps.event.addListener(markers[0], 'click', function() {
           if(openwindow){
              eval(openwindow).close();
          }
          openwindow="infowindows[0]";
           infowindows[0].open(map, markers[0]);
         });
                 infowindows[1] = new google.maps.InfoWindow({
              content: '<div class="mapPopup">'+
              '<div><h4>redNet Dom Sp. z o.o.</h4></div><div>ul. Markowska 22 lok. U7</div>'+
              '<div>03-742 Warszawa</div>'+
              '<div>tel.: +48 22 102 60 10</div>'+
              '<div>e-mail: <a href="mailto:info@rednetdom.pl">info@rednetdom.pl</a></div>'+
              '<div><a href="https://rednetdom.pl" target="_blank">www.rednetdom.pl</a></div>'+
              '</div>',
              maxWidth: 400,
              pixelOffset: new google.maps.Size(-37,-4)
          });
         google.maps.event.addListener(markers[1], 'click', function() {
           if(openwindow){
              eval(openwindow).close();
          }
          openwindow="infowindows[1]";
           infowindows[1].open(map, markers[1]);
         });
                 infowindows[2] = new google.maps.InfoWindow({
              content: '<div class="mapPopup">'+
              '<div><h4>redNet Dom Sp. z o.o.</h4></div><div>Flanders Business Park bud B ul. Marcina Flisa 4</div>'+
              '<div>02-247 Warszawa</div>'+
              '<div>tel.: 22 318 72 74  oraz  22 318 72 45</div>'+
              '<div>e-mail: <a href="mailto:info@rednetdom.pl">info@rednetdom.pl</a></div>'+
              '<div><a href="https://rednetdom.pl" target="_blank">www.rednetdom.pl</a></div>'+
              '</div>',
              maxWidth: 400,
              pixelOffset: new google.maps.Size(-37,-4)
          });
         google.maps.event.addListener(markers[2], 'click', function() {
           if(openwindow){
              eval(openwindow).close();
          }
          openwindow="infowindows[2]";
           infowindows[2].open(map, markers[2]);
         });
                 infowindows[3] = new google.maps.InfoWindow({
              content: '<div class="mapPopup">'+
              '<div><h4>redNet Dom Sp. z o.o.</h4></div><div>ul. Głowackiego 5/4</div>'+
              '<div>25-368 Kielce</div>'+
              '<div>tel.:  +41 263 31 49</div>'+
              '<div>e-mail: <a href="mailto:info@rednetdom.pl">info@rednetdom.pl</a></div>'+
              '<div><a href="https://rednetdom.pl" target="_blank">www.rednetdom.pl</a></div>'+
              '</div>',
              maxWidth: 400,
              pixelOffset: new google.maps.Size(-37,-4)
          });
         google.maps.event.addListener(markers[3], 'click', function() {
           if(openwindow){
              eval(openwindow).close();
          }
          openwindow="infowindows[3]";
           infowindows[3].open(map, markers[3]);
         });
                 infowindows[4] = new google.maps.InfoWindow({
              content: '<div class="mapPopup">'+
              '<div><h4>redNet Dom Sp. z o.o.</h4></div><div>ul. Nowa 23</div>'+
              '<div>25-376 Kielce</div>'+
              '<div>tel.: +48 41 26 333 92</div>'+
              '<div>e-mail: <a href="mailto:info@rednetdom.pl">info@rednetdom.pl</a></div>'+
              '<div><a href="https://rednetdom.pl" target="_blank">www.rednetdom.pl</a></div>'+
              '</div>',
              maxWidth: 400,
              pixelOffset: new google.maps.Size(-37,-4)
          });
         google.maps.event.addListener(markers[4], 'click', function() {
           if(openwindow){
              eval(openwindow).close();
          }
          openwindow="infowindows[4]";
           infowindows[4].open(map, markers[4]);
         });
                 infowindows[5] = new google.maps.InfoWindow({
              content: '<div class="mapPopup">'+
              '<div><h4>redNet Dom Sp. z o.o.</h4></div><div>ul. Słomiana 14/ U2</div>'+
              '<div>30-316 Kraków</div>'+
              '<div>tel.: </div>'+
              '<div>e-mail: <a href="mailto:info@rednetdom.pl">info@rednetdom.pl</a></div>'+
              '<div><a href="https://rednetdom.pl" target="_blank">www.rednetdom.pl</a></div>'+
              '</div>',
              maxWidth: 400,
              pixelOffset: new google.maps.Size(-37,-4)
          });
         google.maps.event.addListener(markers[5], 'click', function() {
           if(openwindow){
              eval(openwindow).close();
          }
          openwindow="infowindows[5]";
           infowindows[5].open(map, markers[5]);
         });
                 infowindows[6] = new google.maps.InfoWindow({
              content: '<div class="mapPopup">'+
              '<div><h4>redNet Dom Sp. z o.o.</h4></div><div>Roderyk Cymler</div>'+
              '<div> Katowice</div>'+
              '<div>tel.: +48 501 124 784</div>'+
              '<div>e-mail: <a href="mailto:info@rednetdom.pl">info@rednetdom.pl</a></div>'+
              '<div><a href="https://rednetdom.pl" target="_blank">www.rednetdom.pl</a></div>'+
              '</div>',
              maxWidth: 400,
              pixelOffset: new google.maps.Size(-37,-4)
          });
         google.maps.event.addListener(markers[6], 'click', function() {
           if(openwindow){
              eval(openwindow).close();
          }
          openwindow="infowindows[6]";
           infowindows[6].open(map, markers[6]);
         });
                 infowindows[7] = new google.maps.InfoWindow({
              content: '<div class="mapPopup">'+
              '<div><h4>redNet Dom Sp. z o.o.</h4></div><div>ul. Kamiennogórska 9/U5</div>'+
              '<div>60-179 Poznań</div>'+
              '<div>tel.: 61 223 02 85</div>'+
              '<div>e-mail: <a href="mailto:info@rednetdom.pl">info@rednetdom.pl</a></div>'+
              '<div><a href="https://rednetdom.pl" target="_blank">www.rednetdom.pl</a></div>'+
              '</div>',
              maxWidth: 400,
              pixelOffset: new google.maps.Size(-37,-4)
          });
         google.maps.event.addListener(markers[7], 'click', function() {
           if(openwindow){
              eval(openwindow).close();
          }
          openwindow="infowindows[7]";
           infowindows[7].open(map, markers[7]);
         });
                 infowindows[8] = new google.maps.InfoWindow({
              content: '<div class="mapPopup">'+
              '<div><h4>redNet Dom Sp. z o.o.</h4></div><div>ul. Przyjaźni 6 lok. 8</div>'+
              '<div>53-030 Wrocław</div>'+
              '<div>tel.: +48 510 203 267</div>'+
              '<div>e-mail: <a href="mailto:info@rednetdom.pl">info@rednetdom.pl</a></div>'+
              '<div><a href="https://rednetdom.pl" target="_blank">www.rednetdom.pl</a></div>'+
              '</div>',
              maxWidth: 400,
              pixelOffset: new google.maps.Size(-37,-4)
          });
         google.maps.event.addListener(markers[8], 'click', function() {
           if(openwindow){
              eval(openwindow).close();
          }
          openwindow="infowindows[8]";
           infowindows[8].open(map, markers[8]);
         });
                 infowindows[9] = new google.maps.InfoWindow({
              content: '<div class="mapPopup">'+
              '<div><h4>redNet Dom Sp. z o.o.</h4></div><div>W tej lokalizacji realizujemy wykończenie mieszkań od 45 m2 od pakietu GOLD</div>'+
              '<div> Gdańsk </div>'+
              '<div>tel.: +48 506 130 564</div>'+
              '<div>e-mail: <a href="mailto:info@rednetdom.pl">info@rednetdom.pl</a></div>'+
              '<div><a href="https://rednetdom.pl" target="_blank">www.rednetdom.pl</a></div>'+
              '</div>',
              maxWidth: 400,
              pixelOffset: new google.maps.Size(-37,-4)
          });
         google.maps.event.addListener(markers[9], 'click', function() {
           if(openwindow){
              eval(openwindow).close();
          }
          openwindow="infowindows[9]";
           infowindows[9].open(map, markers[9]);
         });
       



  clusterStyles = [{
      textColor: '#3c3c3b',
      textSize:'11',
      url: 'https://rednetdom.pl/img/marker-c.svg?1.92',
      anchor: [-12, -30],
      iconAnchor:[13, 39],
      height: 39,
      width: 26
  }];

  markerCluster = new MarkerClusterer(map, markers,
      {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',styles: clusterStyles,gridSize: 20});

};




function dodajMarker(lat,lon,opcjeMarkera)
{
  opcjeMarkera.position = new google.maps.LatLng(lat,lon);
  opcjeMarkera.map = map;
  var marker = new google.maps.Marker(opcjeMarkera);
}

$('.kontaktDane > div').click(function(e){
  if(!$(this).hasClass('rollOn') && !$(e.target).hasClass('crossButton')  && !$(e.target).parent().hasClass('crossButton')) {
    $('.rollOn').removeClass('rollOn');
    $(this).addClass('rollOn');
  }
});
$('.crossButton').click(function(e){
  var obj=$(this).parent();
  if($(obj).hasClass('rollOn')) {
    $(obj).removeClass('rollOn');
  }
  else {
      $(obj).addClass('rollOn');
  }
});