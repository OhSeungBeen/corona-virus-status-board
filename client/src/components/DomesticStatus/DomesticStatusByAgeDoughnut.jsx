import React, { useState, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  Row,
  Col,
  ButtonGroup,
  Button,
} from 'reactstrap';
import { Pie } from 'react-chartjs-2';
import classNames from 'classnames';

function DomesticStatusByAgeDoughnut() {
  const [doughnutData, setDoughnutData] = useState({});
  const [data, setData] = useState('confirmator');

  useEffect(() => {
    fetch('/domesticStatus/age')
      .then(res => res.json())
      .then(ageStatus => {
        let confirmatorLabel = [];
        let confirmatorData = [];
        let deadLabel = [];
        let deadData = [];
        for (let key in ageStatus.confirmator) {
          if (ageStatus.confirmator[key] === '0') continue;
          confirmatorLabel.push(key);
          confirmatorData.push(Number(ageStatus.confirmator[key]));
        }
        for (let key in ageStatus.dead) {
          if (ageStatus.dead[key] === '0') continue;
          deadLabel.push(key);
          deadData.push(Number(ageStatus.dead[key]));
        }
        const doughnutData = {
          confirmator: {
            labels: confirmatorLabel,
            datasets: [
              {
                data: confirmatorData,
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
            labels: deadLabel,
            datasets: [
              {
                data: deadData,
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
              text: '질병관리본부 ' + ageStatus.date.substring(0, 11) + '기준',
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
                    data['datasets'][0]['data'][
                      tooltipItem['index']
                    ].toLocaleString() + '명'
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
        setDoughnutData(doughnutData);
      });
  }, []);

  return (
    <>
      <Card className="card-chart">
        <CardHeader>
          <Row>
            <Col className="text-left" sm="6">
              <i className="tim-icons icon-chart-pie-36 text-primary mr10" />
              <h5 className="card-category display-content">연령별 현황</h5>
            </Col>
            <Col sm="6">
              <ButtonGroup
                className="btn-group-toggle float-right"
                data-toggle="buttons"
              >
                <Button
                  tag="label"
                  className={classNames('btn-simple', {
                    active: data === 'confirmator',
                  })}
                  color="info"
                  id="0"
                  size="sm"
                  onClick={() => setData('confirmator')}
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
                    active: data === 'dead',
                  })}
                  onClick={() => setData('dead')}
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
          <div className="chart-area">
            <Pie
              redraw
              data={doughnutData[data]}
              options={doughnutData.options}
            />
          </div>
        </CardBody>
      </Card>
    </>
  );
}
export default DomesticStatusByAgeDoughnut;
