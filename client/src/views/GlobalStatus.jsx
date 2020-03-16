import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';

import {
  globalStatusByCountryChart,
  countryNumbers,
} from 'variables/charts.jsx';

class GlobalStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { globalStatus: {} };
  }

  componentDidMount() {
    fetch('/globalStatus')
      .then(res => res.json())
      .then(result => {
        const globalStatus = result;
        globalStatus.confirmator = globalStatus.confirmator.toLocaleString();
        globalStatus.isolate = globalStatus.isolate.toLocaleString();
        globalStatus.dead = globalStatus.dead.toLocaleString();
        this.setState({ globalStatus });
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
                    <i className="tim-icons icon-single-02 text-danger" />{' '}
                    {this.state.globalStatus.confirmator}명
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">확진환자 격리해제</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-single-02 text-success" />{' '}
                    {this.state.globalStatus.isolate}명
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">사망자</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-alert-circle-exc text-danger" />{' '}
                    {this.state.globalStatus.dead}명
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="3">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">발생국</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-world text-danger" />{' '}
                    {countryNumbers['numbers']}개국
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>

          {/* globalStatusByCountry */}
          <Row>
            <Col lg="12">
              <Card className="card-chart">
                <CardHeader>
                  <i className="tim-icons icon-chart-bar-32 text-primary mr10" />
                  <h5 className="card-category display-content">
                    나라별 발생동향
                  </h5>
                </CardHeader>
                <CardBody>
                  <HorizontalBar
                    width={100}
                    height={4000}
                    data={globalStatusByCountryChart.data}
                    options={globalStatusByCountryChart.options}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default GlobalStatus;
