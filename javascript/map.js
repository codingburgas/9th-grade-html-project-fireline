// Create the Leaflet map and center it on Sofia (default zoom level 12)
const map = L.map('map').setView([42.6977, 23.3219], 12);

// Add OpenStreetMap tile layer with attribution
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Sample marker for an incident
const incidentMarker = L.marker([42.698, 23.322]).addTo(map);

// Bind a popup to the marker with incident details
incidentMarker.bindPopup(`
  <b>Fire Incident</b><br>
  Location: Sofia<br>
  Status: <span style="color:red;">Active</span>
`).openPopup();
