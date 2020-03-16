import React from 'react';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  CardTitle,
  Alert,
  Table,
} from 'reactstrap';

class Icons extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle></CardTitle>
                </CardHeader>
                <CardBody>
                  <Alert color="info">
                    ㆍ개요
                    <br />
                    코로나 바이이러스(CoV)는 사람과 다양한 동물에 감염될 수 있는
                    바이러스로서 유전자 크기 27~32kb의 RNA 바이러스
                    <br /> <br />
                    ㆍ분류
                    <br />
                    코로나 바이러스과에는 4개의 속(알파, 베타, 감마, 델타)이
                    있음
                    <br />
                    알파․베타 : 사람과 동물에게 감염
                    <br />
                    감마․델타 : 동물에게 감염
                    <br /> <br />
                    ㆍ형태
                    <br />
                    형태는 코로나 바이러스의 명명과 같이 전자현미경 관찰시 구형
                    외부 spike 단백질이 특징적인 크라운형태
                    <br />
                    <br />
                    ㆍ사람감염 코로나
                    <br />
                    바이러스 사람감염 코로나 바이러스는 현재까지 6종류가 알려져
                    있음
                    <br />
                    감기를 일으키는 유형(229E, OC43, NL63, HKU1)
                    <br />
                    중증폐렴을 일으킬 수 있는 유형(SARS-CoV, MERS-CoV)
                    <br /> <br />
                    ㆍ코로나 바이러스 분류표
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>속(genus)</th>
                          <th>사람-코로나 바이러스</th>
                          <th>사람 이외에 감염하는 코로나 바이러스</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>알파-코로나 바이러스(alphacoronavirus)</td>
                          <td>229E, NL63</td>
                          <td>
                            돼지 유행성 설사 바이러스(porcine epidemic diarrhea
                            virus : PEDV), (돼지) 전염성 위장염 바이러스
                            (transmissible gastroenteritis virus : TGEV),
                            개코로나 바이러스(canine coronavirus : CCoV), 고양이
                            코로나 바이러스 (feline coronavirus : FCoV),
                            Miniopterus bat(박쥐) coronavirus 1, Miniopterus
                            bat(박쥐) coronavirus HKU8, Rhinolophus bat(박쥐)
                            coronavirus HKU2, Scotophilus bat(박쥐) coronavirus
                            512
                          </td>
                        </tr>
                        <tr>
                          <td>베타-코로나 바이러스(betacoronavirus)</td>
                          <td>OC43, HKU1, SARS-CoV, MERS-CoV</td>
                          <td>
                            돼지 혈구 응집성뇌척수염 바이러스(porcine
                            hemagglutinating encephalomyelitis virus : PHEV),
                            우코로나 바이러스(bovine coronavirus : BCoV),
                            말코로나 바이러스 (equine coronavirus : EqCoV),
                            쥐코로나 바이러스(murine coronavirus :
                            MuCoV),Tylonycteris bat(박쥐) coronavirus HKU4,
                            Pipistrellus bat(박쥐) coronavirus HKU5,Rousettus
                            bat(박쥐) coronavirus HKU9
                          </td>
                        </tr>
                        <tr>
                          <td>감마-코로나 바이러스(gammacoronavirus)</td>
                          <td>없음</td>
                          <td>
                            새코로나 바이러스(Avian coronavirus),흰색
                            돌고래(Beluga whale)-코로나 바이러스 SW1
                          </td>
                        </tr>
                        <tr>
                          <td>델타-코로나 바이러스(deltacoronavirus)</td>
                          <td>없음</td>
                          <td>
                            제주직박구리(Bulbul)-코로나 바이러스 HKU11,
                            개똥지빠귀(Thrush)-코로나 바이러스 HKU12,
                            킨바라(Munia)-코로나 바이러스 HKU13
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <br />
                    <br />
                    ㆍ코로나바이러스감염증-19(COVID-19) 정보
                    <br />
                    (병원체) 코로나바이러스감염증-19(COVID-19)
                    <br />
                    (감염원) 동물로 추정하고 조사중
                    <br />
                    (전파경로)
                    <br />
                    동물 → 사람 → 사람 전파 추정
                    <br />
                    사람간 전파는 비말(호흡기 분비물) 전파 추정
                    <br />
                    가족간, 의료기관 내 2차감염 확인
                    <br />
                    (임상증상) 발열, 호흡기증상(기침, 호흡곤란), 폐렴
                    <br />
                  </Alert>
                </CardBody>
                <p class="information">출처: 질병관리본부 </p>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Icons;
