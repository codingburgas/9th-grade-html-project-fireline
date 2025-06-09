document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([42.5, 27.5], 9);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  let awaitingLocation = false;
  let selectedCoords = null;

  const reportBtn   = document.getElementById('reportBtn');
  const addBtn      = document.getElementById('addBtn');
  const formSection = document.getElementById('formSection');
  const titleEl     = document.getElementById('markerTitle');
  const descEl      = document.getElementById('description');
  const sevEl       = document.getElementById('severity');
  const pplEl       = document.getElementById('people');

  reportBtn.addEventListener('click', () => {
    awaitingLocation = true;
    reportBtn.textContent = 'Click on the map…';
  });

  map.on('click', e => {
    if (!awaitingLocation) return;
    selectedCoords = e.latlng;
    awaitingLocation = false;
    reportBtn.textContent = 'Selected';
    formSection.classList.add('visible');
  });

  addBtn.addEventListener('click', () => {
    if (!selectedCoords) {
      alert('Select a location first');
      return;
    }
    const title = titleEl.value.trim();
    const desc  = descEl.value.trim();
    const ppl   = pplEl.value.trim();
    if (!title || !desc || !ppl) {
      alert('All fields required');
      return;
    }

    const popup = `
      <h3>${title}</h3>
      <p>${desc}</p>
      <p><strong>Severity:</strong> ${sevEl.value}</p>
      <p><strong>People Affected:</strong> ${ppl}</p>
    `;
    L.marker(selectedCoords).addTo(map).bindPopup(popup).openPopup();

    // reset
    titleEl.value = '';
    descEl.value  = '';
    sevEl.selectedIndex = 0;
    pplEl.value   = '';
    selectedCoords = null;
    reportBtn.textContent = 'Report Incident';
    formSection.classList.remove('visible');
  });
});
