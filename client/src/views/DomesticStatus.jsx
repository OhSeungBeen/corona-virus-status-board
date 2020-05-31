import React from 'react';
import { HorizontalBar, Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';

import { domesticStatusChart } from 'variables/charts.jsx';

import DomesticStatusToday from 'components/DomesticStatus/DomesticStatusToday.jsx';
import DomesticStatusByCityMap from 'components/DomesticStatus/DomesticStatusByCityMap.jsx';
import DomesticStatusByCityTable from 'components/DomesticStatus/DomesticStatusByCityTable.jsx';
import DomesticStatusDailyChart from 'components/DomesticStatus/DomesticStatusDailyChart';
import DomesticStatusBySex from 'components/DomesticStatus/DomesticStatusBySexDoughnut.jsx';
import DomesticStatusByAgeDoughnut from 'components/DomesticStatus/DomesticStatusByAgeDoughnut.jsx';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      domesticStatus: {},
      sexData: 'confirmator',
      ageData: 'confirmator',
    };
  }

  setSexData(data) {
    this.setState({ sexData: data });
  }
  setAgeData(data) {
    this.setState({ ageData: data });
  }

  render() {
    console.log('render()');
    return (
      <>
        <div className="content">
          {/* 국내 오늘 확진 현황 */}
          <DomesticStatusToday />
          <p className="information">
            * (+ / - ) 질병관리본부 전일 발표 대비 변화량
            <br />* 사망률 : (사망자 / 확진환자) * 100
          </p>

          {/* 시도별 발생동향 지도, 테이블 */}
          <Row>
            <Col lg="12" className="pl5 pr5">
              <Card className="card-chart">
                <CardHeader>
                  <i className="tim-icons icon-map-big text-primary mr10" />
                  <h5 className="card-category display-content">
                    시도별 발생동향
                  </h5>
                </CardHeader>
                <CardBody>
                  <DomesticStatusByCityMap />
                  <DomesticStatusByCityTable />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row></Row>

          {/* 일일발생 동향 */}
          <Row>
            <Col lg="12" className="pl5 pr5">
              <DomesticStatusDailyChart />
            </Col>
          </Row>

          {/* 성별발생 동향 파이차트*/}
          <Row>
            <Col lg="12" className="pl5 pr5">
              <DomesticStatusBySex />
            </Col>
          </Row>

          {/* 연령별 발생동향 파이차트 */}
          <Row>
            <Col lg="12" className="pl5 pr5">
              <DomesticStatusByAgeDoughnut />
            </Col>
          </Row>

          {/* 시도별 발생동향 수평차트 */}
          <Row>
            <Col lg="12" className="pl5 pr5">
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

          <p className="information">출처: 질병관리본부</p>
        </div>
      </>
    );
  }
}

export default Dashboard;
