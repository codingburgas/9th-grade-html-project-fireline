document.addEventListener('DOMContentLoaded', () => {
  const listEl = document.getElementById('incidentsList');

  function renderIncidents() {
    listEl.innerHTML = '';
    window.incidents.forEach(inc => {
      const card = document.createElement('div');
      card.className = 'incident-card';
      card.innerHTML = `
        <div class="incident-info">
          <div class="incident-title">${inc.title}</div>
          <div class="incident-detail" id="detail-${inc.id}">
            <strong>Type:</strong> ${inc.type}<br>
            <strong>Severity:</strong> ${inc.severity}<br>
            <strong>People Affected:</strong> ${inc.people}<br>
            <strong>Status:</strong> ${inc.status}
          </div>
        </div>
        <div class="incident-buttons">
          <button class="btn-info" data-id="${inc.id}">More Info</button>
          <button class="btn-status ${inc.status==='resolved'?'resolved':''}" data-id="${inc.id}">
            ${inc.status === 'reported' ? 'Resolve' : 'Report'}
          </button>
        </div>
      `;
      listEl.appendChild(card);
    });
    attachListeners();
  }

  function attachListeners() {
    listEl.querySelectorAll('.btn-info').forEach(btn => {
      btn.onclick = () => {
        const detail = document.getElementById(`detail-${btn.dataset.id}`);
        detail.style.display = detail.style.display === 'block' ? 'none' : 'block';
      };
    });

    listEl.querySelectorAll('.btn-status').forEach(btn => {
      btn.onclick = () => {
        const inc = window.incidents.find(i => i.id == btn.dataset.id);
        inc.status = inc.status === 'reported' ? 'resolved' : 'reported';
        renderIncidents();
      };
    });
  }
  window.renderIncidents = renderIncidents;
  renderIncidents();
});
