// ##############################
// // // Chart variables
// #############################

// chartExample1 and chartExample2 options
// let chart1_2_options = {
//   maintainAspectRatio: false,
//   legend: {
//     display: false
//   },
//   tooltips: {
//     backgroundColor: "#f5f5f5",
//     titleFontColor: "#333",
//     bodyFontColor: "#666",
//     bodySpacing: 4,
//     xPadding: 12,
//     mode: "nearest",
//     intersect: 0,
//     position: "nearest"
//   },
//   responsive: true,
//   scales: {
//     yAxes: [
//       {
//         barPercentage: 1.6,
//         gridLines: {
//           drawBorder: false,
//           color: "rgba(29,140,248,0.0)",
//           zeroLineColor: "transparent"
//         },
//         ticks: {
//           suggestedMin: 60,
//           suggestedMax: 125,
//           padding: 20,
//           fontColor: "#9a9a9a"
//         }
//       }
//     ],
//     xAxes: [
//       {
//         barPercentage: 1.6,
//         gridLines: {
//           drawBorder: false,
//           color: "rgba(29,140,248,0.1)",
//           zeroLineColor: "transparent"
//         },
//         ticks: {
//           padding: 20,
//           fontColor: "#9a9a9a"
//         }
//       }
//     ]
//   }
// };

// // #########################################
// // // // used inside src/views/Dashboard.jsx
// // #########################################
// let chartExample1 = {
//   data1: canvas => {
//     let ctx = canvas.getContext("2d");

//     let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

//     gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
//     gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
//     gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

//     return {
//       labels: [
//         "JAN",
//         "FEB",
//         "MAR",
//         "APR",
//         "MAY",
//         "JUN",
//         "JUL",
//         "AUG",
//         "SEP",
//         "OCT",
//         "NOV",
//         "DEC"
//       ],
//       datasets: [
//         {
//           label: "My First dataset",
//           fill: true,
//           backgroundColor: gradientStroke,
//           borderColor: "#1f8ef1",
//           borderWidth: 2,
//           borderDash: [],
//           borderDashOffset: 0.0,
//           pointBackgroundColor: "#1f8ef1",
//           pointBorderColor: "rgba(255,255,255,0)",
//           pointHoverBackgroundColor: "#1f8ef1",
//           pointBorderWidth: 20,
//           pointHoverRadius: 4,
//           pointHoverBorderWidth: 15,
//           pointRadius: 4,
//           data: [100, 70, 90, 70, 85, 60, 75, 60, 90, 80, 110, 100]
//         }
//       ]
//     };
//   },
//   data2: canvas => {
//     let ctx = canvas.getContext("2d");

//     let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

//     gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
//     gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
//     gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

//     return {
//       labels: [
//         "JAN",
//         "FEB",
//         "MAR",
//         "APR",
//         "MAY",
//         "JUN",
//         "JUL",
//         "AUG",
//         "SEP",
//         "OCT",
//         "NOV",
//         "DEC"
//       ],
//       datasets: [
//         {
//           label: "My First dataset",
//           fill: true,
//           backgroundColor: gradientStroke,
//           borderColor: "#1f8ef1",
//           borderWidth: 2,
//           borderDash: [],
//           borderDashOffset: 0.0,
//           pointBackgroundColor: "#1f8ef1",
//           pointBorderColor: "rgba(255,255,255,0)",
//           pointHoverBackgroundColor: "#1f8ef1",
//           pointBorderWidth: 20,
//           pointHoverRadius: 4,
//           pointHoverBorderWidth: 15,
//           pointRadius: 4,
//           data: [80, 120, 105, 110, 95, 105, 90, 100, 80, 95, 70, 120]
//         }
//       ]
//     };
//   },
//   data3: canvas => {
//     let ctx = canvas.getContext("2d");

//     let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

//     gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
//     gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
//     gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

//     return {
//       labels: [
//         "JAN",
//         "FEB",
//         "MAR",
//         "APR",
//         "MAY",
//         "JUN",
//         "JUL",
//         "AUG",
//         "SEP",
//         "OCT",
//         "NOV",
//         "DEC"
//       ],
//       datasets: [
//         {
//           label: "My First dataset",
//           fill: true,
//           backgroundColor: gradientStroke,
//           borderColor: "#1f8ef1",
//           borderWidth: 2,
//           borderDash: [],
//           borderDashOffset: 0.0,
//           pointBackgroundColor: "#1f8ef1",
//           pointBorderColor: "rgba(255,255,255,0)",
//           pointHoverBackgroundColor: "#1f8ef1",
//           pointBorderWidth: 20,
//           pointHoverRadius: 4,
//           pointHoverBorderWidth: 15,
//           pointRadius: 4,
//           data: [60, 80, 65, 130, 80, 105, 90, 130, 70, 115, 60, 130]
//         }
//       ]
//     };
//   },
//   options: chart1_2_options
// };

// // #########################################
// // // // used inside src/views/Dashboard.jsx
// // #########################################

// let chartExample2 = {
//   data: canvas => {
//     let ctx = canvas.getContext("2d");

//     let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

//     gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
//     gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
//     gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors

//     return {
//       labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
//       datasets: [
//         {
//           label: "Data",
//           fill: true,
//           backgroundColor: gradientStroke,
//           borderColor: "#1f8ef1",
//           borderWidth: 2,
//           borderDash: [],
//           borderDashOffset: 0.0,
//           pointBackgroundColor: "#1f8ef1",
//           pointBorderColor: "rgba(255,255,255,0)",
//           pointHoverBackgroundColor: "#1f8ef1",
//           pointBorderWidth: 20,
//           pointHoverRadius: 4,
//           pointHoverBorderWidth: 15,
//           pointRadius: 4,
//           data: [80, 100, 70, 80, 120, 80]
//         }
//       ]
//     };
//   },
//   options: chart1_2_options
// };

// // #########################################
// // // // used inside src/views/Dashboard.jsx
// // #########################################
// const chartExample4 = {
//   data: canvas => {
//     let ctx = canvas.getContext("2d");

//     let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);

//     gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
//     gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
//     gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors

//     return {
//       labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
//       datasets: [
//         {
//           label: "My First dataset",
//           fill: true,
//           backgroundColor: gradientStroke,
//           borderColor: "#00d6b4",
//           borderWidth: 2,
//           borderDash: [],
//           borderDashOffset: 0.0,
//           pointBackgroundColor: "#00d6b4",
//           pointBorderColor: "rgba(255,255,255,0)",
//           pointHoverBackgroundColor: "#00d6b4",
//           pointBorderWidth: 20,
//           pointHoverRadius: 4,
//           pointHoverBorderWidth: 15,
//           pointRadius: 4,
//           data: [90, 27, 60, 12, 80]
//         }
//       ]
//     };
//   },
//   options: {
//     maintainAspectRatio: false,
//     legend: {
//       display: false
//     },

//     tooltips: {
//       backgroundColor: "#f5f5f5",
//       titleFontColor: "#333",
//       bodyFontColor: "#666",
//       bodySpacing: 4,
//       xPadding: 12,
//       mode: "nearest",
//       intersect: 0,
//       position: "nearest"
//     },
//     responsive: true,
//     scales: {
//       yAxes: [
//         {
//           barPercentage: 1.6,
//           gridLines: {
//             drawBorder: false,
//             color: "rgba(29,140,248,0.0)",
//             zeroLineColor: "transparent"
//           },
//           ticks: {
//             suggestedMin: 50,
//             suggestedMax: 125,
//             padding: 20,
//             fontColor: "#9e9e9e"
//           }
//         }
//       ],

//       xAxes: [
//         {
//           barPercentage: 1.6,
//           gridLines: {
//             drawBorder: false,
//             color: "rgba(0,242,195,0.1)",
//             zeroLineColor: "transparent"
//           },
//           ticks: {
//             padding: 20,
//             fontColor: "#9e9e9e"
//           }
//         }
//       ]
//     }
//   }
// };

// module.exports = {
//   chartExample1, // in src/views/Dashboard.jsx
//   chartExample2, // in src/views/Dashboard.jsx
//   chartExample4 // in src/views/Dashboard.jsx
// };

// #########################################
// // // used inside src/views/Dashboard.jsx
// #########################################

const citys = [];
const numbers = [];

let chartExample3 = {
  data: canvas => {
    console.log(citys);
    let ctx = canvas.getContext('2d');
    let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    gradientStroke.addColorStop(1, 'rgba(72,72,176,0.1)');
    gradientStroke.addColorStop(0.4, 'rgba(72,72,176,0.0)');
    gradientStroke.addColorStop(0, 'rgba(119,52,169,0)'); //purple colors

    fetch('/domesticStatusByCity')
      .then(res => res.json())
      .then(result => {
        if (citys.length) return;
        const domesticStatusByCity = result[0];
        delete domesticStatusByCity._id;
        delete domesticStatusByCity.date;
        delete domesticStatusByCity.__v;

        const sortable = [];
        for (let city in domesticStatusByCity) {
          sortable.push([city, domesticStatusByCity[city]]);
        }
        sortable.sort((a, b) => b[1] - a[1]);

        sortable.forEach(item => {
          citys.push(item[0]);
          numbers.push(item[1]);
        });
      });

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
            suggestedMin: 60,
            suggestedMax: 120,
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
  chartExample3, // in src/views/Dashboard.jsx
};
