import React from 'react';
import classNames from 'classnames';
import { HorizontalBar, Bar } from 'react-chartjs-2';

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

import {
  domesticStatusChart,
  domesticStatusDailyChart,
} from 'variables/charts.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domesticStatus: {},
      dailyDate: 'data1',
    };
  }

  setDaily(data) {
    this.setState({ dailyDate: data });
  }

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
            <Col lg="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <i className="tim-icons icon-chart-bar-32 text-primary mr10" />
                      <h5 className="card-category display-content">
                        일일 발생동향
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
                            active: this.state.dailyDate === 'data1',
                          })}
                          color="info"
                          id="0"
                          size="sm"
                          onClick={() => this.setDaily('data1')}
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
                            active: this.state.dailyDate === 'data2',
                          })}
                          onClick={() => this.setDaily('data2')}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            격리해제
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
                            active: this.state.dailyDate === 'data3',
                          })}
                          onClick={() => this.setDaily('data3')}
                        >
                          <input
                            className="d-none"
                            name="options"
                            type="radio"
                          />
                          <span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
                            사망자
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
                    <Bar
                      data={domesticStatusDailyChart[this.state.dailyDate]}
                      options={domesticStatusDailyChart.options}
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
