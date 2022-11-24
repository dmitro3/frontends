/* eslint-disable no-new */

/* eslint-disable import/prefer-default-export */
import { Chart, registerables } from 'chart.js';

export async function printChart(times, prices, id) {
  Chart.register(...registerables);

  const dom = document.getElementById(id).getContext('2d');

  const gradient = dom.createLinearGradient(0, 0, 0, 400);

  gradient.addColorStop(0, 'rgba(247,147,26,.5)');
  gradient.addColorStop(0.425, 'rgba(255,193,119,0)');

  new Chart(dom, {
    type: 'line',
    data: {
      labels: times,
      datasets: [
        {
          label: '$',
          data: prices,
          backgroundColor: gradient,
          borderColor: 'rgba(247,147,26,1)',
          borderJoinStyle: 'round',
          borderCapStyle: 'round',
          borderWidth: 3,
          pointRadius: 0,
          pointHitRadius: 10,
          lineTension: 0.2,
        },
      ],
    },

    options: {
      responsive: true,
      title: {
        display: false,
        text: 'Heckin Chart!',
        fontSize: 35,
      },
      plugins: {
        tooltips: {
          callbacks: {
            // This removes the tooltip title
            title() {},
          },
          // this removes legend color
          displayColors: false,
          yPadding: 10,
          xPadding: 10,
          position: 'nearest',
          caretSize: 10,
          backgroundColor: 'rgba(255,255,255,.9)',
          bodyFontSize: 15,
          bodyFontColor: '#303030',
        },
        legend: {
          display: false,
        },
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },

      scales: {
        x: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            borderColor: 'red',
          },
        },
        y: {
          ticks: {
            display: false,
          },
          grid: {
            display: false,
            drawBorder: false,
            borderColor: 'red',
          },
        },
      },
    },
  });
}
