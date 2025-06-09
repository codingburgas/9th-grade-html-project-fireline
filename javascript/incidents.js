
document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([42.7, 23.3], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  let selectedCoords = null;

  map.on('click', function(e) {
    selectedCoords = e.latlng;
    alert("Location selected");
  });

  document.getElementById('addBtn').addEventListener('click', () => {
    const title = document.getElementById('markerTitle').value.trim();
    const description = document.getElementById('description').value.trim();
    const severity = document.getElementById('severity').value;
    const people = document.getElementById('people').value;
    const type = document.getElementById('type').value;

    if (!selectedCoords || !title || !description || !people) {
      alert('Please fill all fields and select a location on the map.');
      return;
    }

    fetch('../php/save_incident.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        description,
        severity,
        people,
        type,
        lat: selectedCoords.lat,
        lng: selectedCoords.lng
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.status === 'success') {
        alert('Incident submitted.');
        window.location.href = '../html/map.html';
      } else {
        alert('Error saving: ' + data.error);
      }
    });
  });
});
