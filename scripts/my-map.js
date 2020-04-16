function createMap(container, initialCoordinates, zoomLevel) {
  let maxBounds = [
    [1.190848, 103.569690],
    [1.491992, 104.055178]
  ]
  let map = L.map(container); // create leaflet map and store the resultant object inside the map variable
  map.setView(initialCoordinates, zoomLevel);
  map.setMaxBounds(maxBounds);

  let layer = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" //demo access token
    }
  );

  layer.addTo(map);
  return map;
}