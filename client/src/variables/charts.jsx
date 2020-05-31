// domesticStatusBy------------------------------------------------------
const citys = [];
const numbers = [];
fetch('/domesticStatusByCity')
  .then(res => res.json())
  .then(result => {
    const domesticStatusByCity = result;

    const sortable = [];
    for (let city in domesticStatusByCity) {
      sortable.push([city, domesticStatusByCity[city]]);
    }
    sortable.sort((a, b) => b[1].confirmator - a[1].confirmator);

    sortable.forEach(item => {
      citys.push(item[0]);
      numbers.push(item[1].confirmator);
    });
  });

let domesticStatusChart = {
  data: function(canvas) {
    let ctx = canvas.getContext('2d');
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)');
    return {
      labels: citys,
      datasets: [
        {
          label: '확진환자',
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#d048b6',
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          data: numbers,
        },
      ],
    };
  },
  options: {
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        formatter: function(value, context) {
          let sum = 0;
          let dataArr = context.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += Number(data);
          });
          let percentage = ((value * 100) / sum).toFixed(2) + '%';
          return `${Number(value).toLocaleString()}명(${percentage})`;
        },
        font: {
          size: '12',
        },
      },
    },
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function(tooltipItem, data) {
          return (
            Number(
              data['datasets'][0]['data'][tooltipItem['index']],
            ).toLocaleString() + '명'
          );
        },
      },
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest',
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9e9e9e',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9e9e9e',
          },
        },
      ],
    },
  },
};

// globalStatusByCountry------------------------------
const country = [];
const countryByCityNumbers = [];
const countryNumbers = {};
fetch('/globalStatusByCountry')
  .then(res => res.json())
  .then(results => {
    for (let key in results) {
      if (key === 'date' || key === 'Korea, South' || key === 'numbers')
        continue;
      country.push(key);
      countryByCityNumbers.push(results[key]);
    }
    countryNumbers['numbers'] = results.numbers;
  });

let globalStatusByCountryChart = {
  data: function(canvas) {
    let ctx = canvas.getContext('2d');
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)');
    return {
      labels: country,
      datasets: [
        {
          label: '확진환자',
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#d048b6',
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          data: countryByCityNumbers,
        },
      ],
    };
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'nearest',
      intersect: 0,
      position: 'nearest',
    },
    responsive: true,
    scales: {
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9e9e9e',
          },
        },
      ],
      xAxes: [
        {
          gridLines: {
            drawBorder: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9e9e9e',
          },
        },
      ],
    },
  },
};

module.exports = {
  domesticStatusChart,
  globalStatusByCountryChart,
  countryNumbers,
};
