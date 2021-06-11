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

function toggleAnimation() {
  hourAssistant.classList.toggle('pauseAnimation');
  optionCanAnimate.classList.toggle('active');
}

/* for 'See All' Click  - Begin */
document
  .querySelector('.button')
  .addEventListener("click", (cliked) => {
    document.querySelector("body").classList.add("showOverlay");
    setTimeout(
      () =>
        document
          .querySelector(".overlay-inner")
          .classList.remove("dNone"),
      1900
    );
    setTimeout(() => document.location.reload(), 7000);
  });
/* for 'See All' Click  - End */

/* ------------------ CHART ------------------ */

var options = {
  series: [{
    name: 'A',
    data: [9, 45, 16, 37, 22, 6, 9, 45, 16, 37, 22, 6]
  }, {
    name: 'B',
    data: [13, 20, 25, 18, 13, 10, 13, 20, 25, 18, 13, 10]
  }],
  chart: {
    type: 'bar',
    height: 240,
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
    type: 'string',
    categories: [
      'Sep',
      'Out',
      'Nov',
      'Dez',
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun'
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