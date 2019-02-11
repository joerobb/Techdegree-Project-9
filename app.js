const alert = document.querySelector('div.alert');
const x = document.querySelector('h4.close');
const circle = document.querySelector('circle.circle')

x.addEventListener('click', () => {
  alert.style.display = 'none';
  circle.style.display = 'none'
});


var ctx = document.getElementById('lineChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["", "16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            label: 'Traffic',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(0, 107, 179)',
            lineTension: 0,
            data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
            pointBackgroundColor: 'rgb(255, 255, 255)',
            pointRadius: 5,
        }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },

       scales: {
         yAxes: [{
                 ticks: {
                     //beginAtZero:false,
                     scaleBeginAtZero : false

                 }
             }],

       }



    }
});

var ctx = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctx, {
 "type": "bar", "data":
{ "labels":
[ "S", "M", "T", "W", "T", "F", "S", ],
"datasets": [{ "label": "My First Dataset", "data":
[65, 59, 80, 81, 56, 55, 40], "fill": false,
"backgroundColor": [ "rgba(255, 99, 132, 0.2)", "rgba(255, 159, 64, 0.2)", "rgba(255, 205, 86, 0.2)", "rgba(75, 192, 192, 0.2)", "rgba(54, 162, 235, 0.2)", "rgba(153, 102, 255, 0.2)", "rgba(201, 203, 207, 0.2)" ],
"borderColor": [ "rgb(255, 99, 132)", "rgb(255, 159, 64)", "rgb(255, 205, 86)", "rgb(75, 192, 192)", "rgb(54, 162, 235)", "rgb(153, 102, 255)", "rgb(201, 203, 207)" ],
"borderWidth": 1 }] },
"options": {
  "scales":
  { "yAxes":
  [{ "ticks":
  { "beginAtZero": true }
}] } } });
