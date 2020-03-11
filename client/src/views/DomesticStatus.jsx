import React from 'react';
import classNames from 'classnames';
import { HorizontalBar, Line } from 'react-chartjs-2';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col,
  ButtonGroup,
  Button,
} from 'reactstrap';

import { domesticStatusChart, chartExample1 } from 'variables/charts.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { domesticStatus: {}, bigChartData: 'data1' };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name,
    });
  };

  componentDidMount() {
    fetch('/domesticStatus')
      .then(res => res.json())
      .then(result => {
        const domesticStatus = result;
        domesticStatus.confirmator = domesticStatus.confirmator.toLocaleString();
        domesticStatus.isolate = domesticStatus.isolate.toLocaleString();
        domesticStatus.dead = domesticStatus.dead.toLocaleString();
        domesticStatus.inspection = domesticStatus.inspection.toLocaleString();
        this.setState({ domesticStatus });
      });
  }

  render() {
    console.log('render()');
    return (
      <>
        <div className="content">
          {/* domesticStauts */}
          <Row>
            <Col lg="3">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">확진환자</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-check-2 text-danger" />{' '}
                    {this.state.domesticStatus.confirmator}명
                  </CardTitle>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">확진환자 격리헤제</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-simple-add text-success" />{' '}
                    {this.state.domesticStatus.isolate}명
                  </CardTitle>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">사망자</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-alert-circle-exc text-danger" />{' '}
                    {this.state.domesticStatus.dead}명
                  </CardTitle>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">검사진행</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-refresh-02 text-info" />{' '}
                    {this.state.domesticStatus.inspection}명
                  </CardTitle>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </Col>
          </Row>

          {/* domesticStatusBycity */}
          <Row>
            <Col lg="12">
              <Card className="card-chart">
                <CardHeader>
                  <i className="tim-icons icon-chart-bar-32 text-primary mr10" />
                  <h5 className="card-category display-content">
                    시도별 발생동향
                  </h5>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <HorizontalBar
                      data={domesticStatusChart.data}
                      options={domesticStatusChart.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">
                        확진자 추세(서비스 준비 중입니다.)
                      </h5>
                    </Col>
                    <Col sm="6">
                      <ButtonGroup
                        className="btn-group-toggle float-right"
                        data-toggle="buttons"
                      >
                        <Button
                          tag="label"
                          className={classNames('btn-simple', {
                            active: this.state.bigChartData === 'data1',
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setBgChartData('data1')}
                        >
                          <input
                            defaultChecked
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            준비중
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-single-02" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="1"
                          size="sm"
                          tag="label"
                          className={classNames('btn-simple', {
                            active: this.state.bigChartData === 'data2',
                          })}
                          onClick={() => this.setBgChartData('data2')}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            준비중
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-gift-2" />
                          </span>
                        </Button>
                        <Button
                          color="info"
                          id="2"
                          size="sm"
                          tag="label"
                          className={classNames('btn-simple', {
                            active: this.state.bigChartData === 'data3',
                          })}
                          onClick={() => this.setBgChartData('data3')}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            준비중
                          </span>
                          <span className="d-block d-sm-none">
                            <i className="tim-icons icon-tap-02" />
                          </span>
                        </Button>
                      </ButtonGroup>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={chartExample1[this.state.bigChartData]}
                      options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
