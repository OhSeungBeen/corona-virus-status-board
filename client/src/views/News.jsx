import React from 'react';

// import {
//   Button,
//   Row,
//   Card,
//   CardHeader,
//   CardBody,
// } from 'reactstrap';
import Iframe from 'react-iframe';

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: '100%',
      height: '100%',
    };
  }

  componentDidMount() {
    if (!isMobile()) {
      this.setState({ width: '500px' });
      this.setState({ height: '300px' });
    }
  }

  render() {
    return (
      <>
        <div className="content">
          실시간 YTN 뉴스
          <br></br>
          <Iframe
            url="https://www.youtube.com/embed/U_sYIKWhJvk"
            allow="fullscreen"
            width={this.state.width}
            height={this.state.height}
            styles={{ bor: '25px' }}
          />
          <br></br>
          실시간 KBS 뉴스
          <Iframe
            url="https://www.youtube.com/embed/zT656tdpm0Q"
            allow="fullscreen"
            width={this.state.width}
            height={this.state.height}
          />
          <br></br>
          실시간 연합뉴스TV
          <Iframe
            url="https://www.youtube.com/embed/oul5ldEUbHk"
            allow="fullscreen"
            width={this.state.width}
            height={this.state.height}
          />
        </div>
      </>
    );
  }
}

export default News;
