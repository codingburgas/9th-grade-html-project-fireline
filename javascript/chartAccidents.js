new Chart(document.getElementById('pie').getContext('2d'), {
    type: 'pie',
    data: {
        labels: ['providing assistance to injured citizens', 'disasters', 'accidents', 'domestic/industrial incidents', 'incidents with hazardous substances and materials', 'incidents with sources of ionizing radiation', 'providing assistance, search and/or rescue', 'vehicle accidents', 'technical assistance'],
        datasets: [{
            data: [192, 15, 48, 184, 100, 82, 129, 1866, 10278],
    backgroundColor: [
        'rgba(212, 46, 34, 0.5)',
        'rgba(21, 154, 243, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
        'rgba(217, 64, 255, 0.5)',
        'rgba(64, 255, 239, 0.5)',
        'rgba(135, 145, 201, 0.5)',
    ],
    borderColor: [
        'rgba(212, 46, 34, 1)',
        'rgba(21, 154, 243, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(217, 64, 255, 1)',
        'rgba(64, 255, 239, 1)',
        'rgba(135, 145, 201, 1)',
    ]
    }]
    }
    });