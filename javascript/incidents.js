// Initialize map
const map = L.map('map').setView([42.5, 27.5], 9);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

let reporting = false;
let coords = null;

// Elements
const reportBtn = document.getElementById('reportBtn');
const addBtn    = document.getElementById('addBtn');
const titleEl   = document.getElementById('markerTitle');
const descEl    = document.getElementById('description');
const sevEl     = document.getElementById('severity');
const pplEl     = document.getElementById('people');

// Enable reporting
reportBtn.addEventListener('click', () => {
  reporting = true;
  alert('Click on map to choose incident location.');
});

// Map click handler
map.on('click', e => {
  if (!reporting) return;
  coords = e.latlng;
  reportBtn.textContent = 'Location Selected';
});

// Add incident
addBtn.addEventListener('click', () => {
  if (!coords) {
    alert('Please select location on map first.');
    return;
  }

  const title = titleEl.value.trim();
  const desc  = descEl.value.trim();
  const sev   = sevEl.value;
  const ppl   = pplEl.value.trim();

  if (!title || !desc || !ppl) {
    alert('All fields are required.');
    return;
  }

  const popup = `
    <h3>${title}</h3>
    <p>${desc}</p>
    <p><strong>Severity:</strong> ${sev}</p>
    <p><strong>People Affected:</strong> ${ppl}</p>
  `;

  L.marker(coords).addTo(map).bindPopup(popup);

  // Reset form
  titleEl.value = '';
  descEl.value  = '';
  sevEl.selectedIndex = 0;
  pplEl.value   = '';
  coords        = null;
  reporting     = false;
  reportBtn.textContent = 'Report Incident';
});