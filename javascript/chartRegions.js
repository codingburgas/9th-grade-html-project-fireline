new Chart(document.getElementById('bar').getContext('2d'), {
    type: 'bar',
    data: {
      labels: ['Blagoevgrad', 'Burgas', 'Varna', 'Veliko Tarnovo', 'Vidin', 'Vraca', 'Gabrovo', 'Dobrich', 'Kardzali', 'Kyustendil', 'Lovech', 'Montana', 'Pazardzik', 'Pernik', 'Pleven', 'Plovdiv', 'Razgrad', 'Ruse', 'Silistra', 'Sliven', 'Smolyan', 'Sofia city', 'Sofia region', 'Stara Zagora', 'Targovishte', 'Haskovo', 'Shumen', 'Yambol'],
      datasets: [{
        label: 'Fires',
        data: [1575, 1800, 2114, 1220, 799, 1321, 446, 861, 439, 726, 1238, 1226, 1441, 678, 1757, 3731, 587, 905, 567, 1098, 345, 3679, 1619, 1884, 472, 1447, 753, 702],
        backgroundColor: ['rgba(212, 46, 34, 0.43)'],
        borderColor: ['rgba(212, 46, 34, 1)']
      }]
    }
  });
  