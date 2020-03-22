const DomesticStatusByAgeDoughnut = {
  confirmator: {
    labels: [
      '0-9세  ',
      '10-19세',
      '20-29세',
      '30-39세',
      '40-49세',
      '50-59세',
      '60-69세',
      '70-79세',
      '80세이상',
    ],
    datasets: [
      {
        data: [101, 460, 2396, 909, 1221, 1691, 1132, 595, 392],
        backgroundColor: [
          '#beaed4',
          '#dfc27d',
          '#e14eca',
          '#7fc97f',
          '#1d8cf8',
          '#666666',
          '#e6ab02',
          '#d95f02',
          '#1b9e77',
        ],
        borderColor: '#27293d',
        borderWidth: 3,
      },
    ],
  },
  dead: {
    labels: ['30-39세', '40-49세', '50-59세', '60-69세', '70-79세', '80세이상'],
    datasets: [
      {
        data: [1, 1, 7, 17, 37, 41],
        backgroundColor: [
          '#1b9e77',
          '#dfc27d',
          '#7fc97f',
          '#e14eca',
          '#d95f02',
          '#1d8cf8',
        ],
        borderColor: '#27293d',
        borderWidth: 3,
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: '질병관리본부 2020-03-22 00시 기준',
    },
    layout: {
      padding: 20,
    },
    responsive: true,
    backgroundColor: ['#e14eca', '#1d8cf8'],
    tooltips: {
      callbacks: {
        title: function(tooltipItem, data) {
          return data['labels'][tooltipItem[0]['index']];
        },
        label: function(tooltipItem, data) {
          return (
            data['datasets'][0]['data'][tooltipItem['index']].toLocaleString() +
            '명'
          );
        },
      },
      backgroundColor: '#f5f5f5',
      titleFontColor: '#333',
      bodyFontColor: '#666',
      bodySpacing: 4,
      xPadding: 12,
      mode: 'label',
      position: 'nearest',
    },
    legend: {
      position: 'bottom',
      labels: {
        boxWidth: 13,
      },
    },
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'start',
        font: {
          size: '10',
          weight: 'bold',
        },
        color: '#fff',
        formatter: function(value, context) {
          let sum = 0;
          let dataArr = context.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(0) + '%';
          return `${percentage}`;
        },
      },
    },
  },
};

export default DomesticStatusByAgeDoughnut;
