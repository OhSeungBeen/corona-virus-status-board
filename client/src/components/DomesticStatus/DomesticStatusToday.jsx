import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, Row, Col } from 'reactstrap';

function DomesticStatusToday() {
  const [domesticStatus, setDomesticStatus] = useState({});
  const [amountOfChange, setAmoutOfChange] = useState({});

  useEffect(() => {
    fetch('/domesticStatus')
      .then(res => res.json())
      .then(domesticStatus => {
        //전일대비 변화량
        setAmoutOfChange({
          confirmator:
            domesticStatus[1].confirmator - domesticStatus[0].confirmator,
          isolate: domesticStatus[1].isolate - domesticStatus[0].isolate,
          discharge: domesticStatus[1].discharge - domesticStatus[0].discharge,
          dead: domesticStatus[1].dead - domesticStatus[0].dead,
        });

        // 오늘데이터
        let todayStatus = domesticStatus[0];
        // 사망률 추가
        todayStatus.mortality = Number(
          ((todayStatus.dead / todayStatus.confirmator) * 100).toFixed(1),
        );
        //date,mortality빼고 ,추가해준다.
        for (let key in todayStatus) {
          if (key === 'date' || key === 'mortality') continue;
          todayStatus[key] = todayStatus[key].toLocaleString();
        }
        setDomesticStatus(todayStatus);
      });
  }, []);
  return (
    <>
      <Row>
        <Col lg="3" xs="6" className="pl5 pr5">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">확진환자</h5>
              <CardTitle tag="h3">
                <i className="tim-icons icon-single-02 text-danger" />{' '}
                {domesticStatus.confirmator}명{' '}
                <span className="daily-span-red ">
                  (
                  {amountOfChange.confirmator >= 0
                    ? '+' + amountOfChange.confirmator
                    : amountOfChange.confirmator}
                  )
                </span>
              </CardTitle>
            </CardHeader>
          </Card>
        </Col>
        <Col lg="3" xs="6" className="pl5 pr5">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">확진환자 격리중</h5>
              <CardTitle tag="h3">
                <i className="tim-icons icon-single-02 text-danger" />{' '}
                {domesticStatus.isolate}명{' '}
                <span className="daily-span-red ">
                  (
                  {amountOfChange.isolate >= 0
                    ? '+' + amountOfChange.isolate
                    : amountOfChange.isolate}
                  )
                </span>
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
                {domesticStatus.discharge}명{' '}
                <span className="daily-span-red ">
                  (
                  {amountOfChange.discharge >= 0
                    ? '+' + amountOfChange.discharge
                    : amountOfChange.discharge}
                  )
                </span>
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
                {domesticStatus.dead}명{' '}
                <span className="daily-span-red ">
                  (
                  {amountOfChange.dead >= 0
                    ? '+' + amountOfChange.dead
                    : amountOfChange.dead}
                  )
                </span>
              </CardTitle>
            </CardHeader>
          </Card>
        </Col>
        <Col lg="3" xs="6" className="pl5 pr5">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">총 검사수</h5>
              <CardTitle tag="h3">
                <i className="tim-icons icon-zoom-split " />{' '}
                {domesticStatus.inspectionSum}명{' '}
              </CardTitle>
            </CardHeader>
          </Card>
        </Col>
        <Col lg="3" xs="6" className="pl5 pr5">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">검사진행</h5>
              <CardTitle tag="h3">
                <i className="tim-icons icon-refresh-02 text-info" />{' '}
                {domesticStatus.inspection}명{' '}
              </CardTitle>
            </CardHeader>
          </Card>
        </Col>
        <Col lg="3" xs="6" className="pl5 pr5">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">결과 음성</h5>
              <CardTitle tag="h3">
                <i className="tim-icons icon-single-02 text-success" />{' '}
                {domesticStatus.inspectionNegative}명{' '}
              </CardTitle>
            </CardHeader>
          </Card>
        </Col>
        <Col lg="3" xs="6" className="pl5 pr5">
          <Card className="card-chart">
            <CardHeader>
              <h5 className="card-category">사망률</h5>
              <CardTitle tag="h3">{domesticStatus.mortality}%</CardTitle>
            </CardHeader>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default DomesticStatusToday;
