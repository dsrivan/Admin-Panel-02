// 'btn' Click to animate the hour assistant above
const lCanAnimate = document.querySelector('.lCanAnimate');
const divCheck = document.querySelector('.divCheck');

// active/disable the animations
lCanAnimate.addEventListener('click', toggleAnimation);
divCheck.addEventListener('click', toggleAnimation);

// the assistant element
const hourAssistant = document.querySelector('.hourAssistant');

// the checkbox label than show the message 'HOUR ASSISTANT ANIMATION'
const optionCanAnimate = document.querySelector('.optionCanAnimate');

function toggleAnimation(){
    hourAssistant.classList.toggle('pauseAnimation');
    optionCanAnimate.classList.toggle('active');
}


/* ------------------ CHART ------------------ */

var options = {
    series: [{
    name: 'A',
    data: [9, 55, 41, 67, 22, 43]
  }, {
    name: 'B',
    data: [13, 23, 20, 8, 13, 27]
  }],
    chart: {
    type: 'bar',
    height: 280,
    stacked: true,
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  responsive: [{
    breakpoint: 480,
    options: {
      legend: {
        position: 'bottom',
        offsetX: -10,
        offsetY: 0
      }
    }
  }],
  plotOptions: {
    bar: {
      borderRadius: 8,
      horizontal: false
    },
  },
  xaxis: {
    type: 'datetime',
    categories: [
        '01/01/2011 GMT', 
        '01/02/2011 GMT', 
        '01/03/2011 GMT', 
        '01/04/2011 GMT',
        '01/05/2011 GMT',
        '01/06/2011 GMT'
      ],
  },
  legend: {
    position: 'right',
    offsetY: 40,
    show: false
  },
  fill: {
    opacity: 1
  }
};

const divChart = document.querySelector("#chart");

const chart = new ApexCharts(divChart, options);
chart.render();