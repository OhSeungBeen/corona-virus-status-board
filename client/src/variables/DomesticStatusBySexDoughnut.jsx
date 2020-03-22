const DomesticStatusBySexDoughnut = {
  confirmator: {
    labels: ['남성', '여성'],
    datasets: [
      {
        data: [3430, 5467],
        backgroundColor: ['#e14eca', '#1d8cf8'],
        borderColor: '#27293d',
        borderWidth: 3,
      },
    ],
  },
  dead: {
    labels: ['남성', '여성'],
    datasets: [
      {
        data: [55, 49],
        backgroundColor: ['#e14eca', '#1d8cf8'],
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
      padding: 30,
    },
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
        fontStyle: 'bold',
      },
    },
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        formatter: function(value, context) {
          let sum = 0;
          let dataArr = context.chart.data.datasets[0].data;
          dataArr.map(data => {
            sum += data;
          });
          let percentage = ((value * 100) / sum).toFixed(2) + '%';
          return `          ${
            context.chart.data.labels[context.dataIndex]
          }\n${value.toLocaleString()}명 (${percentage})`;
        },
        color: '#fff',
        font: {
          size: '10',
          weight: 'bold',
        },
      },
    },
  },
};

export default DomesticStatusBySexDoughnut;
