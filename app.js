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

var ctb = document.getElementById('barChart').getContext('2d');
var barChart = new Chart(ctb, {
 "type": "bar",
  "data":
{ "labels":
[ "S", "M", "T", "W", "T", "F", "S", ],
"datasets": [{ "label": "My First Dataset", "data":
[50, 75, 150, 100, 200, 175, 75], "fill": false,
"backgroundColor": [ "rgb(0, 107, 179)", "rgb(0, 107, 179)", "rgb(0, 107, 179)", "rgb(0, 107, 179)", "rgb(0, 107, 179)", "rgb(0, 107, 179)", "rgb(0, 107, 179)" ],
"borderColor": [ "rgb(0, 107, 179)", "rgb(0, 107, 179)", "rgb(0, 107, 179)", "rgb(0, 107, 179)", "rgb(0, 107, 179)", "rgb(0, 107, 179)", "rgb(0, 107, 179)" ],
"borderWidth": 1 }] },
"options": {
  legend: {
    display: false
  },
  layout: {
          padding: {
              left: 15,
              right: 15,
              top: 15,
              bottom: 15
          }
        },
  "scales":
  { "yAxes":
  [{ "ticks":
  { "beginAtZero": true }
}] } } });

 var ctd = document.getElementById('doughnutChart').getContext('2d');
 var myDoughnutChart = new Chart(ctd, {
    "type": "doughnut",
   "data": {
      "labels": [ "Phones", "Tablets", "Desktop" ],
      "datasets": [{ "label": "My First Dataset",
      "data": [300, 50, 100],
       "backgroundColor": [ "rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)" ]
     }]
   },

  "options": {
    responsive: true,
   layout: {
           padding: {
               left: 15,
               right: 15,
               top: 15,
               bottom: 15
           }
         },
   legend: {
     position: 'right',
     display: true,
     labels: {
           fontColor: '#000',
           fontSize: 16,
           boxWidth: 20,
           padding: 5
         },
         layout: {
                 margin: {
                     left: -20,
                     right: 20,
                     top: 0,
                     bottom: 20
                 }
               },
  }
}
 });
