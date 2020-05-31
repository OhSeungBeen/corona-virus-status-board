import React from 'react';
import /* HorizontalBar */ 'react-chartjs-2';

import { Card, CardHeader, CardBody, CardTitle, Row, Col } from 'reactstrap';
import GlobalStautsByCounrtryTable from 'components/GlobalStatus/GlobalStautsByCountryTable.jsx';
import GlobalStatusByCountryMap from 'components/GlobalStatus/GlobalStatusByCountryMap.jsx';

class GlobalStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = { globalStatus: {} };
  }

  componentDidMount() {
    fetch('/globalStatusByCountry/total')
      .then(res => res.json())
      .then(globalStatus => {
        globalStatus.mortality = (
          (globalStatus.dead / globalStatus.confirmator) *
          100
        ).toFixed(2);
        globalStatus.confirmator = globalStatus.confirmator.toLocaleString();
        globalStatus.isolate = globalStatus.isolate.toLocaleString();
        globalStatus.dead = globalStatus.dead.toLocaleString();
        globalStatus.numbers = globalStatus.numbers.toLocaleString();
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
            <Col lg="3" xs="6" className="pl5 pr5">
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
            <Col lg="3" xs="6" className="pl5 pr5">
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
            <Col lg="3" xs="6" className="pl5 pr5">
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
            <Col lg="3" xs="6" className="pl5 pr5">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">사망률</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-alert-circle-exc text-danger" />{' '}
                    {this.state.globalStatus.mortality}%
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
            <Col lg="3" className="pl5 pr5">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">발생국</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-world text-danger" />{' '}
                    {this.state.globalStatus.numbers}개국
                  </CardTitle>
                </CardHeader>
              </Card>
            </Col>
          </Row>
          <p className="information">* 사망률 : (사망자 / 확진환자) * 100</p>
          {/* globalStatusByCountry */}
          <Row>
            <Col lg="12" className="pl5 pr5">
              <Card className="card-chart">
                <CardHeader>
                  <i className="tim-icons icon-map-big text-primary mr10" />
                  <h5 className="card-category display-content">
                    나라별 발생동향
                  </h5>
                </CardHeader>
                <CardBody>
                  <GlobalStatusByCountryMap />
                  <GlobalStautsByCounrtryTable />
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
