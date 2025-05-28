    const map = L.map('map', {
        center: [42.7, 23.3],
        zoom: 13,
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 9,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map)
    let currentLatLng
    let markerToDelete = null
    function openModal(latLng) {
      currentLatLng = latLng
      document.getElementById('modal').style.display = 'block'
      document.getElementById('overlay').style.display = 'block'
      document.getElementById('markerTitle').value = ''
      document.getElementById('description').value = ''
    }
    function closeModal() {
      document.getElementById('modal').style.display = 'none'
      document.getElementById('overlay').style.display = 'none'
    }
    function openModalDelete() {
      document.getElementById('modalDelete').style.display = 'block'
      document.getElementById('overlay').style.display = 'block'
    }
    function closeModalDelete() {
      document.getElementById('modalDelete').style.display = 'none'
      document.getElementById('overlay').style.display = 'none'
    }
    function addMarker() {
      const title = document.getElementById('markerTitle').value.trim()
      const description = document.getElementById('description').value.trim()
    let marker = L.marker(currentLatLng).addTo(map)
            .bindPopup(`<b>${title}</b><br>${description}`)
            .openPopup()
            marker.on('click', function(e) {
              L.DomEvent.stopPropagation(e)
              markerToDelete = marker
              openModalDelete()
            })
            closeModal()
    }
    function confirmDelete() {
      if(markerToDelete) {
        map.removeLayer(markerToDelete)
        markerToDelete = null
      }
      closeModalDelete()
    }
    map.on('click', function(e) {
      openModal(e.latlng)
    })