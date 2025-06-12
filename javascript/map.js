document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([42.7, 23.3], 13);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);

  const icons = {
    fire: L.icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/2085/2085250.png', iconSize: [32, 32] }),
    accident: L.icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/942/942748.png', iconSize: [32, 32] }),
    flood: L.icon({ iconUrl: 'https://cdn-icons-png.flaticon.com/512/7281/7281205.png', iconSize: [32, 32] })
  };

  const layers = {
    fire: L.layerGroup().addTo(map),
    accident: L.layerGroup().addTo(map),
    flood: L.layerGroup().addTo(map)
  };

  fetch('../php/load_incidents.php')
    .then(res => res.json())
    .then(data => {
      data.forEach(incident => {
        const icon = icons[incident.type] || icons.fire;
        const popup = `
          <h3>${incident.title}</h3>
          <p>${incident.description}</p>
          <p><strong>Severity:</strong> ${incident.severity}</p>
          <p><strong>People Affected:</strong> ${incident.people}</p>
        `;
        L.marker([incident.lat, incident.lng], { icon })
          .bindPopup(popup)
          .addTo(layers[incident.type]);
      });
    })
    .catch(err => console.error('Error loading incidents:', err));

  // Layer control toggle
  L.control.layers(null, {
    'Fires': layers.fire,
    'Accidents': layers.accident,
    'Floods': layers.flood
  }).addTo(map);

  // Add geocoder search
  L.Control.geocoder({
    defaultMarkGeocode: false
  })
    .on('markgeocode', function (e) {
      const bbox = e.geocode.bbox;
      const bounds = L.latLngBounds(bbox.getSouthEast(), bbox.getNorthWest());
      map.fitBounds(bounds);
    })
    .addTo(map);

  // Show coordinates on click
  map.on('click', function (e) {
    const { lat, lng } = e.latlng;
    alert(`Coordinates: ${lat.toFixed(5)}, ${lng.toFixed(5)}`);
  });

  // Optional: Dark mode toggle
  const themeswitch = document.getElementById('theme-switch');
  if (themeswitch) {
    let darkmode = localStorage.getItem('darkmode');

    const enableDarkMode = () => {
      document.body.classList.add('darkmode');
      localStorage.setItem('darkmode', 'active');
    };

    const disableDarkMode = () => {
      document.body.classList.remove('darkmode');
      localStorage.setItem('darkmode', null);
    };

    if (darkmode === 'active') enableDarkMode();

    themeswitch.addEventListener('click', () => {
      darkmode = localStorage.getItem('darkmode');
      darkmode !== 'active' ? enableDarkMode() : disableDarkMode();
    });
  }
});
