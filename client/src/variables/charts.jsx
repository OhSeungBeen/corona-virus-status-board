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

//-----------------------------------------------------------------------------------------------------
const confirmator = [];
const isolate = [];
const dead = [];
const date = [];
const dailyConfirmator = [];
const dailyIsolate = [];
const dailyDead = [];
const dailyInspectionSum = [];
const dailyInspection = [];
const dailyInspectionNegative = [];

fetch('/domesticStatus/dailyData')
  .then(res => res.json())
  .then(results => {
    for (let index in results) {
      if (index === '0') continue;
      dailyConfirmator.push(
        results[index].confirmator - results[index - 1].confirmator,
      );
      dailyIsolate.push(results[index].isolate - results[index - 1].isolate);
      dailyDead.push(results[index].dead - results[index - 1].dead);
      //데이터 쌓이면 수정할것
      if (Number(index) === Object.keys(results).length - 1) {
        dailyInspectionSum.push(
          results[index].inspectionSum - results[index - 1].inspectionSum,
        );
        dailyInspection.push(
          results[index].inspection - results[index - 1].inspection,
        );
        dailyInspectionNegative.push(
          results[index].inspectionNegative -
            results[index - 1].inspectionNegative,
        );
      }

      confirmator.push(results[index].confirmator);
      isolate.push(results[index].isolate);
      dead.push(results[index].dead);
      date.push(results[index].date.substring(5, 10));
    }
  });

let domesticStatusDailyChart = {
  data1: function(canvas) {
    let ctx = canvas.getContext('2d');
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)');

    return {
      datasets: [
        {
          label: '확진자',
          type: 'line',
          data: dailyConfirmator,
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#1f8ef1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#1f8ef1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          yAxisID: 'y-axis-2',
          datalabels: {
            offset: 7,
            align: 'left',
            color: '#1d8cf8',
            formatter: function(value, context) {
              return `${Number(value).toLocaleString()}`;
            },
            font: {
              size: '12',
            },
          },
        },
        {
          type: 'bar',
          label: '누적확진자',
          data: confirmator,
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#d048b6',
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#e14eca',
            formatter: function(value, context) {
              return `${Number(value).toLocaleString()}`;
            },
            font: {
              size: '12',
            },
          },
          yAxisID: 'y-axis-1',
        },
      ],
    };
  },
  data2: function(canvas) {
    let ctx = canvas.getContext('2d');
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)');

    return {
      datasets: [
        {
          label: '격리헤제',
          type: 'line',
          data: dailyIsolate,
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#1f8ef1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#1f8ef1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          datalabels: {
            offset: 7,
            align: 'left',
            color: '#1d8cf8',
            formatter: function(value, context) {
              return `${Number(value).toLocaleString()}`;
            },
            font: {
              size: '12',
            },
          },
          yAxisID: 'y-axis-2',
        },
        {
          type: 'bar',
          label: '누적 격리헤제',
          data: isolate,
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#d048b6',
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          yAxisID: 'y-axis-1',
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#e14eca',
            formatter: function(value, context) {
              return `${Number(value).toLocaleString()}`;
            },
            font: {
              size: '12',
            },
          },
        },
      ],
    };
  },
  data3: function(canvas) {
    let ctx = canvas.getContext('2d');
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)');

    return {
      datasets: [
        {
          label: '사망자',
          type: 'line',
          data: dailyDead,
          fill: true,
          backgroundColor: gradientStroke,
          borderColor: '#1f8ef1',
          borderWidth: 2,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBackgroundColor: '#1f8ef1',
          pointBorderColor: 'rgba(255,255,255,0)',
          pointHoverBackgroundColor: '#1f8ef1',
          pointBorderWidth: 20,
          pointHoverRadius: 4,
          pointHoverBorderWidth: 15,
          pointRadius: 4,
          yAxisID: 'y-axis-2',
          datalabels: {
            offset: 7,
            align: 'left',
            color: '#1d8cf8',
            formatter: function(value, context) {
              return `${Number(value).toLocaleString()}`;
            },
            font: {
              size: '12',
            },
          },
        },
        {
          type: 'bar',
          label: '누적 사망자',
          data: dead,
          fill: true,
          backgroundColor: gradientStroke,
          hoverBackgroundColor: gradientStroke,
          borderColor: '#d048b6',
          borderWidth: 1,
          borderDash: [],
          borderDashOffset: 0.0,
          yAxisID: 'y-axis-1',
          datalabels: {
            color: '#e14eca',
            anchor: 'end',
            align: 'top',
            formatter: function(value, context) {
              return `${Number(value).toLocaleString()}`;
            },
            font: {
              size: '12',
            },
          },
        },
      ],
    };
  },

  options: {
    maintainAspectRatio: false,
    responsive: true,
    legend: {
      display: true,
    },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          return `${
            data.datasets[tooltipItem.datasetIndex].label
          }: ${data.datasets[tooltipItem.datasetIndex].data[
            tooltipItem.index
          ].toLocaleString()}명`;
        },
      },
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'label',
      intersect: 0,
      position: 'nearest',
    },
    scales: {
      xAxes: [
        {
          barPercentage: 0.5,
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            padding: 20,
            fontColor: '#9a9a9a',
          },
          labels: date,
        },
      ],
      yAxes: [
        {
          type: 'linear',
          display: true,
          position: 'right',
          id: 'y-axis-1',
          gridLines: {
            drawBorder: false,
            color: 'rgba(29,140,248,0.0)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            // beginAtZero: true,
            padding: 10,
            fontColor: '#9a9a9a',
          },
          labels: {
            show: true,
          },
        },
        {
          type: 'linear',
          display: true,
          position: 'left',
          id: 'y-axis-2',
          gridLines: {
            display: false,
            color: 'rgba(225,78,202,0.1)',
            zeroLineColor: 'transparent',
          },
          ticks: {
            // beginAtZero: true,
            padding: 20,
            fontColor: '#9e9e9e',
          },
          labels: {
            show: true,
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
  domesticStatusDailyChart,
  globalStatusByCountryChart,
  countryNumbers,
  dailyConfirmator,
  dailyIsolate,
  dailyDead,
  dailyInspectionSum,
  dailyInspection,
  dailyInspectionNegative,
};
