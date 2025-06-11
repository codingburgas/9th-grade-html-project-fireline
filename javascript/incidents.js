document.addEventListener('DOMContentLoaded', () => {
  const map = L.map('map').setView([42.7, 25.3], 7);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(map);
  const icons = {
    fire: new L.Icon({
      iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/red-dot.png',
      iconSize: [32,32], iconAnchor: [16,32], popupAnchor: [0,-30]
    }),
    accident: new L.Icon({
      iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/blue-dot.png',
      iconSize: [32,32], iconAnchor: [16,32], popupAnchor: [0,-30]
    }),
    flood: new L.Icon({
      iconUrl: 'https://maps.gstatic.com/mapfiles/ms2/micons/green-dot.png',
      iconSize: [32,32], iconAnchor: [16,32], popupAnchor: [0,-30]
    })
  };

 const presetIncidents = [
  { id:1, title:"Forest fire near Rila Mountains",    type:"fire",                 severity:"High",     people:0,  status:"resolved", coords:[42.1330,23.4330] },
  { id:2, title:"Wildfire in Central Balkan",         type:"fire",                 severity:"High",     people:0,  status:"resolved", coords:[42.7330,24.9330] },
  { id:3, title:"Blaze near Devin",                   type:"fire",                 severity:"High",     people:0,  status:"resolved", coords:[41.7410,24.3910] },

  { id:6, title:"Наводнение в кв. Люлин, София",      type:"flood",                severity:"Medium",   people:12, status:"active",   coords:[42.6690,23.2612], details:["Улица „Петко Д. Петков“ е затворена за движение","Евакуирани са 35 жители от приземните етажи"] },
  { id:7, title:"Земетресение край Пловдив",           type:"earthquake",           severity:"High",     people:0,  status:"resolved", coords:[42.1354,24.7453], details:["Няма сериозни щети по сгради","Към момента няма пострадали"] },
  { id:8, title:"Срутище на пътя Варна–Златни пясъци",  type:"landslide",            severity:"Low",      people:0,  status:"active",   coords:[43.2160,27.9122], details:["Карайте с повишено внимание, движението се осъществява в едната лента","Очаква се техника за почистване до 18:00"] },
  { id:9, title:"Химическа авария в пристанище Бургас", type:"chemical spill",       severity:"Critical", people:5,  status:"active",   coords:[42.5048,27.4626], details:["Промишлената зона е отцепена","Извършва се масова евакуация в радиус 2 км"] },
  { id:10,title:"Силни ветрове и торнадо край Русе",    type:"tornado",              severity:"High",     people:1,  status:"resolved", coords:[43.8356,25.9653], details:["Повалени дървета по пътя за Мартен – движението е затруднено","Пострадал е един човек, откаран е в болница"] },

  { id:11,title:"Лавина в Пампорово",                  type:"avalanche",            severity:"Critical", people:3,  status:"active",   coords:[41.6500,24.7500], details:["Ски зона е затворена","Тече издирване на 2-ма туристи"] },
  { id:12,title:"Гореща вълна край Хасково",          type:"heatwave",             severity:"Medium",   people:0,  status:"active",   coords:[41.9312,25.5660], details:["Въвеждат се ограничения за работа на открито","Отворени са охлаждащи пунктове в града"] },
  { id:13,title:"Пожар във Витошка гора",             type:"wildfire",             severity:"High",     people:0,  status:"active",   coords:[42.6000,23.2000], details:["Затворени са пътеките за туристи","Очаква се помощ от хеликоптер"] },
  { id:14,title:"Авария на водоснабдяването в Бургас", type:"infrastructure failure",severity:"Low",      people:1500,status:"active",   coords:[42.4973,27.4697], details:["Аварията е в кв. „Възраждане“","Ремонти продължават през нощта"] },
  { id:15,title:"Избухване на болест в Добруджа",      type:"outbreak",             severity:"Medium",   people:8,  status:"active",   coords:[43.5667,27.8333], details:["Подготвят се полеви лаборатории","Наложена е карантина в 3 села"] },

  { id:16,title:"Кибератака срещу община В. Търново",    type:"cyber attack",         severity:"High",     people:0,  status:"resolved", coords:[43.0828,25.6436], details:["Системите бяха блокирани за 4 часа","Възстановено е нормалното функциониране"] },
  { id:17,title:"Наводнение в Сливенско поле",        type:"flood",                severity:"High",     people:20, status:"active",   coords:[42.6911,26.3221], details:["Селата Тополчане и Жельо войвода са евакуирани","Пътят към Нова Загора е затворен"] },
  { id:18,title:"Земетресение край Перперикон",       type:"earthquake",           severity:"Medium",   people:0,  status:"resolved", coords:[41.6403,25.3317], details:["Няма материални щети","Наблюдава се вторичен трус"] },
  { id:19,title:"Силна буря над Шумен",              type:"storm",                severity:"Medium",   people:0,  status:"active",   coords:[43.2706,27.1767], details:["Повалени клони блокират бул. „Славянски“","Препоръчва се безопасно разстояние от прозорци"] },
  { id:20,title:"Изтичане на газ във Видин",           type:"gas leak",             severity:"Critical", people:4,  status:"active",   coords:[43.9913,22.8769], details:["Районът около площад „Бдинци“ е отцепен","Евакуирани са 60 жители"] }
];


  window.incidents = presetIncidents.map(i => {
    const {coords, ...rest} = i;
    return rest;
  });

  presetIncidents.forEach(i => {
    L.marker(i.coords, { icon: icons[i.type] })
     .addTo(map)
     .bindPopup(`<strong>${i.title}</strong><br>
                 Type: ${i.type}<br>
                 Status: <span style="color:green;">Resolved</span>`);
  });


  let selectedCoords = null;
  map.on('click', e => {
    selectedCoords = e.latlng;
    L.popup()
     .setLatLng(selectedCoords)
     .setContent("Location selected")
     .openOn(map);
  });

  document.getElementById('addBtn').addEventListener('click', () => {
    const title       = document.getElementById('markerTitle').value.trim();
    const description = document.getElementById('description').value.trim();
    const severity    = document.getElementById('severity').value;
    const people      = parseInt(document.getElementById('people').value, 10);
    const type        = document.getElementById('type').value;

    if (!selectedCoords || !title || !description || isNaN(people)) {
      return alert('Please fill in all fields and select a location on the map.');
    }

    L.marker([selectedCoords.lat, selectedCoords.lng], { icon: icons[type] })
     .addTo(map)
     .bindPopup(`
       <strong>${title}</strong><br>
       ${description}<br>
       Severity: ${severity}<br>
       People Affected: ${people}<br>
       Type: ${type}<br>
       <span style="color:orange;"><strong>Reported</strong></span>
     `).openPopup();

    const newIncident = {
      id: Date.now(),
      title,
      type,
      severity,
      people,
      status: 'reported'
    };
    window.incidents.push(newIncident);

    if (typeof window.renderIncidents === 'function') {
      window.renderIncidents();
    }
    document.getElementById('markerTitle').value = '';
    document.getElementById('description').value = '';
    document.getElementById('severity').value = 'Low';
    document.getElementById('people').value = '';
    document.getElementById('type').value = 'fire';
    selectedCoords = null;
    alert('Incident added.');
  });
});
