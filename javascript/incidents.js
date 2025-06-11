document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([42.7, 25.3], 7);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const icons = {
    fire: new L.Icon({
      iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    }),
    accident: new L.Icon({
      iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    }),
    flood: new L.Icon({
      iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32]
    })
  };

  let markers = [];

  const presetIncidents = [
    { title: "Crash near Burgas port", type: "accident", coords: [42.497, 27.472] },
    { title: "Pileup on Hemus highway", type: "accident", coords: [43.067, 25.65] },
    { title: "Vehicle crash near Montana", type: "accident", coords: [43.409, 23.225] },
    { title: "Bus incident near Blagoevgrad", type: "accident", coords: [42.016, 23.1] },
    { title: "Major collision in Plovdiv center", type: "accident", coords: [42.141, 24.748] },
    { title: "Accident at Sofia Ring Road", type: "accident", coords: [42.683, 23.333] },
    { title: "Serious accident near Veliko Tarnovo", type: "accident", coords: [43.08, 25.63] }
  ];

  const accidentList = document.getElementById('accidentItems');

  function addIncidentToMap(incident, status = 'Reported') {
    const marker = L.marker(incident.coords, { icon: icons[incident.type] }).addTo(map);
    marker.bindPopup(`
      <strong>${incident.title}</strong><br>
      Type: ${incident.type}<br>
      <span class="marker-status" style="color:${status === 'Resolved' ? 'green' : 'orange'};"><strong>${status}</strong></span>
    `);
    markers.push({ marker, status });
    return marker;
  }

  function addIncidentToSidebar(incident, markerIndex) {
    const id = markerIndex;
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${incident.title}</strong><br>
      <span id="status-${id}" style="color:orange;">Reported</span>
      <button class="status-btn" data-id="${id}">Change Status</button>
    `;
    accidentList.appendChild(li);
  }

  presetIncidents.forEach((incident, index) => {
    addIncidentToMap(incident, 'Reported');
    addIncidentToSidebar(incident, index);
  });

  accidentList.addEventListener('click', (e) => {
    if (e.target.classList.contains('status-btn')) {
      const id = e.target.getAttribute('data-id');
      const statusEl = document.getElementById(`status-${id}`);
      const markerObj = markers[id];
      const popupContent = markerObj.marker.getPopup().getContent();

      let newStatus = '';
      if (statusEl.textContent === 'Reported') {
        newStatus = 'Resolved';
        statusEl.textContent = 'Resolved';
        statusEl.style.color = 'green';
      } else {
        newStatus = 'Reported';
        statusEl.textContent = 'Reported';
        statusEl.style.color = 'orange';
      }

      const updatedPopup = popupContent.replace(
        /<span class="marker-status".*?<\/span>/,
        `<span class="marker-status" style="color:${newStatus === 'Resolved' ? 'green' : 'orange'};"><strong>${newStatus}</strong></span>`
      );
      markerObj.marker.setPopupContent(updatedPopup);
      markerObj.status = newStatus;
    }
  });

  // Reporting incidents
  let selectedCoords = null;
  map.on('click', function (e) {
    selectedCoords = e.latlng;
    L.popup().setLatLng(selectedCoords).setContent("Location selected").openOn(map);
  });

  document.getElementById('addBtn').addEventListener('click', () => {
    const title = document.getElementById('markerTitle').value.trim();
    const description = document.getElementById('description').value.trim();
    const severity = document.getElementById('severity').value;
    const people = document.getElementById('people').value;
    const type = document.getElementById('type').value;

    if (!selectedCoords || !title || !description || people === '') {
      alert('Please fill in all fields and select a location on the map.');
      return;
    }

    const incident = {
      title,
      type,
      coords: [selectedCoords.lat, selectedCoords.lng]
    };

    const markerIndex = markers.length;
    const marker = addIncidentToMap(incident, 'Reported');
    addIncidentToSidebar(incident, markerIndex);

    marker.bindPopup(`
      <strong>${title}</strong><br>
      ${description}<br>
      Severity: ${severity}<br>
      People Affected: ${people}<br>
      Type: ${type}<br>
      <span class="marker-status" style="color:orange;"><strong>Reported</strong></span>
    `);

    document.getElementById('markerTitle').value = '';
    document.getElementById('description').value = '';
    document.getElementById('severity').value = 'Low';
    document.getElementById('people').value = '';
    document.getElementById('type').value = 'fire';
    selectedCoords = null;
  });
});
