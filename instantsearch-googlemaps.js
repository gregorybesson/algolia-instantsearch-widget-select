instantsearch.widgets.mapWidget = function selectWidget(options) {
  var container = options.container;
  var markers = []
  var map = null

  container = document.querySelector(container);

  return {
    // Transform one hit to a Google Maps marker
    _hitToMarker: function(hit) {
      var marker = new google.maps.Marker({
        position: {lat: hit._geoloc.lat, lng: hit._geoloc.lng},
        map: map,
        title: hit.name
      });

      var infowindow = new google.maps.InfoWindow({
        content: hit.name
      });

      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });

      return marker;
    },

    init: function(options) {
      var helper = options.helper;

      // Initialize the map
      map = new google.maps.Map(
          container,
          {zoom: 1, center: new google.maps.LatLng(0, 0)}
      );
    },

    render: function(options) {
      // Clear markers
      markers.forEach(function (marker) {
        marker.setMap(null)
      });

      markers = options.results.hits.map(this._hitToMarker.bind(this));

      var bounds = new google.maps.LatLngBounds();

      markers.forEach(function(marker) {
        bounds.extend(marker.getPosition());
      });

      map.fitBounds(bounds);
    }
  }
}
