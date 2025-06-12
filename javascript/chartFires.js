new Chart(document.getElementById('doughnut').getContext('2d'), {
    type: 'doughnut',
    data: {
    labels: ['With material loss', 'Without material loss'],
    datasets: [{
    data: [7832, 27598],
    backgroundColor: [
        'rgba(75, 192, 192, 0.2)',
        'rgba(212, 46, 34, 0.43)'
    ],
    borderColor: [
        'rgba(75, 192, 192, 1)',
        'rgba(212, 46, 34, 1)'
    ]
    }]
    }
    });