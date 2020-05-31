import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import classNames from 'classnames';
import 'chartjs-plugin-datalabels';

import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  ButtonGroup,
  Button,
} from 'reactstrap';

function DomesticStatusDailyChart() {
  const [chartData, setChartData] = useState({});
  const [data, setData] = useState('data1');

  useEffect(() => {
    //일일 데이터
    const confirmator = [];
    const isolate = [];
    const discharge = [];
    const dead = [];
    //일일증감 데이터
    const dailyConfirmator = [];
    const dailyIsolate = [];
    const dailyDischarge = [];
    const dailyDead = [];
    const date = [];

    fetch('/domesticStatus/dailyData/week')
      .then(res => res.json())
      .then(results => {
        console.log(results);
        for (let index in results) {
          if (index === '0') continue; //마지막 날짜일때 스킵
          //일일증감 데이터 배열로 만들기
          dailyConfirmator.push(
            results[index].confirmator - results[index - 1].confirmator,
          );
          dailyIsolate.push(
            results[index].isolate - results[index - 1].isolate,
          );
          dailyDischarge.push(
            results[index].discharge - results[index - 1].discharge,
          );
          dailyDead.push(results[index].dead - results[index - 1].dead);
          //일일 데이터 배열로 만들기
          confirmator.push(results[index].confirmator);
          isolate.push(results[index].isolate);
          discharge.push(results[index].discharge);
          dead.push(results[index].dead);
          date.push(results[index].date.substring(5, 10));
        }
        let chartData = {
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
                  label: '격리 환자',
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
                  label: '누적 격리 환자',
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
                  label: '격리 해제',
                  type: 'line',
                  data: dailyDischarge,
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
                  label: '누적 격리 해제',
                  data: discharge,
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
          data4: function(canvas) {
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
              padding: '10',
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
        setChartData(chartData);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <Card className="card-chart">
      <CardHeader>
        <Row>
          <Col className="text-left" sm="6">
            <i className="tim-icons icon-chart-bar-32 text-primary mr10" />
            <h5 className="card-category display-content">일일 발생동향</h5>
          </Col>
          <Col sm="6">
            <ButtonGroup
              className="btn-group-toggle float-right"
              data-toggle="buttons"
            >
              <Button
                tag="label"
                className={classNames('btn-simple', {
                  active: data === 'data1',
                })}
                color="info"
                id="0"
                size="sm"
                onClick={() => setData('data1')}
              >
                <input
                  defaultChecked
                  className="d-none"
                  name="options"
                  type="radio"
                />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  확진자
                </span>
                <span className="d-block d-sm-none">확진자</span>
              </Button>
              <Button
                color="info"
                id="1"
                size="sm"
                tag="label"
                className={classNames('btn-simple', {
                  active: data === 'data2',
                })}
                onClick={() => setData('data2')}
              >
                <input className="d-none" name="options" type="radio" />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  격리 환자
                </span>
                <span className="d-block d-sm-none">격리 환자</span>
              </Button>
              <Button
                color="info"
                id="1"
                size="sm"
                tag="label"
                className={classNames('btn-simple', {
                  active: data === 'data3',
                })}
                onClick={() => setData('data3')}
              >
                <input className="d-none" name="options" type="radio" />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  격리 해제
                </span>
                <span className="d-block d-sm-none">격리 해제</span>
              </Button>
              <Button
                color="info"
                id="2"
                size="sm"
                tag="label"
                className={classNames('btn-simple', {
                  active: data === 'data4',
                })}
                onClick={() => setData('data4')}
              >
                <input className="d-none" name="options" type="radio" />
                <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                  사망자
                </span>
                <span className="d-block d-sm-none">사망자</span>
              </Button>
            </ButtonGroup>
          </Col>
        </Row>
      </CardHeader>
      <CardBody>
        <Bar data={chartData[data]} options={chartData.options} />
      </CardBody>
    </Card>
  );
}

export default DomesticStatusDailyChart;
