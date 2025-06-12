document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([42.7, 25.3], 7);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  let selectedCoords = null;

  map.on('click', function (e) {
    selectedCoords = e.latlng;

    L.popup()
      .setLatLng(selectedCoords)
      .setContent("Location selected")
      .openOn(map);
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

    L.marker([selectedCoords.lat, selectedCoords.lng])
      .addTo(map)
      .bindPopup(`
        <strong>${title}</strong><br>
        ${description}<br>
        Severity: ${severity}<br>
        People Affected: ${people}<br>
        Type: ${type}<br>
        <span style="color:orange;"><strong>Reported</strong></span>
      `)
      .openPopup();

    alert('Incident added.');

    document.getElementById('markerTitle').value = '';
    document.getElementById('description').value = '';
    document.getElementById('severity').value = 'Low';
    document.getElementById('people').value = '';
    document.getElementById('type').value = 'fire';
    selectedCoords = null;
  });

  // === Predefined incidents ===
  const icons = {
    fire: new L.Icon({
      iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -30]
    }),
    accident: new L.Icon({
      iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -30]
    }),
    flood: new L.Icon({
      iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -30]
    })
  };

  const presetIncidents = [
    { title: "Forest fire near Rila Mountains", type: "fire", coords: [42.133, 23.433] },
    { title: "Wildfire in Central Balkan", type: "fire", coords: [42.733, 24.933] },
    { title: "Blaze near Devin", type: "fire", coords: [41.741, 24.391] },
    { title: "Fire outbreak near Gotse Delchev", type: "fire", coords: [41.567, 23.717] },
    { title: "Wildfire close to Belogradchik Rocks", type: "fire", coords: [43.623, 22.683] },

    { title: "Flooding in Lom near Danube River", type: "flood", coords: [43.813, 23.241] },
    { title: "Flood near Svilengrad (Maritsa River)", type: "flood", coords: [41.767, 26.2] },
    { title: "Overflow near Kardzhali Dam", type: "flood", coords: [41.65, 25.367] },
    { title: "Village flooded near Iskar River", type: "flood", coords: [43.1, 23.533] },
    { title: "Flood incident in Silistra (Danube)", type: "flood", coords: [44.117, 27.267] },

    { title: "Car crash on A1 Trakia Highway", type: "accident", coords: [42.2, 25.0] },
    { title: "Accident at Sofia Ring Road", type: "accident", coords: [42.683, 23.333] },
    { title: "Major collision in Plovdiv center", type: "accident", coords: [42.141, 24.748] },
    { title: "Bus incident near Blagoevgrad", type: "accident", coords: [42.016, 23.1] },
    { title: "Vehicle crash near Montana", type: "accident", coords: [43.409, 23.225] },
    { title: "Pileup on Hemus highway", type: "accident", coords: [43.067, 25.65] },
    { title: "Crash near Burgas port", type: "accident", coords: [42.497, 27.472] },
    { title: "Serious accident near Veliko Tarnovo", type: "accident", coords: [43.08, 25.63] }
  ];

  presetIncidents.forEach(incident => {
    L.marker(incident.coords, { icon: icons[incident.type] })
      .addTo(map)
      .bindPopup(`
        <strong>${incident.title}</strong><br>
        Type: ${incident.type}<br>
        <span style="color:green;"><strong>Resolved</strong></span>
      `);
  });
});