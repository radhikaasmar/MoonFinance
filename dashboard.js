const ctx = document.getElementById('myChart').getContext('2d');

const data = {
    labels: ['Risk', 'Diversity', 'Stability'],
    datasets: [{
        label: 'portfolio',
        data: [50, 75, 60],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointRadius: 5,
        pointHitRadius: 10,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: 'rgba(255, 99, 132, 1)',
        pointBorderWidth: 1
    }]
};

const config = {
    type: 'radar',
    data: data,
    
options: {
    scales: {
        r: {
            angleLines: {
                display: true,
                color:"rgb(255,255,255)",
                beginAtZero:true
            },
            gridLines: {
                display:true,
                color:"rgb(255,255,255)",
                beginAtZero:true
            },
            pointLabels: {
               display: true, // Hides the labels around the radar chart
               color:"rgb(255,255,255)",
               size:"30px",
               borderColor:"rgb(150,150,150)",
               beginAtZero:true
            },

            ticks: {
               display: false, // Hides the labels in the middel (numbers)
               beginAtZero:true,
               
            },
            beginAtZero:true,
            max:100

       }
   }
}
  };

const myChart = new Chart(ctx, config);
