import React from 'react';
// react plugin used to create google maps
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

// reactstrap components
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';

const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: 36.4203004, lng: 128.31796 }}
      defaultOptions={{
        scrollwheel: false,
      }}
    ></GoogleMap>
  )),
);

class Map extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card className="card-plain">
                <CardHeader>서비스 준비 중입니다.</CardHeader>
                <CardBody>
                  <div
                    id="map"
                    className="map"
                    style={{ position: 'relative', overflow: 'hidden' }}
                  >
                    <MapWrapper
                      googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAPfPKg5VQGjvTQXY4ejFB09fNrZMB1pyg"
                      loadingElement={<div style={{ height: `100%` }} />}
                      containerElement={<div style={{ height: `100%` }} />}
                      mapElement={<div style={{ height: `100%` }} />}
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

export default Map;
