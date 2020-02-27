import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
  state = { domesticStatus: {} }

  componentDidMount(){
    fetch('/domestic/status')
    .then(res => res.json())
    .then(domesticStatus => this.setState( {domesticStatus : domesticStatus} ));
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div class="row">
          <div class="col-12"></div>
          </div>
        </div>

        <h1>코로나 현황판</h1>
        <ul>
          <li>확진자{this.state.domesticStatus.confirmator}</li>
          <li>사망{this.state.domesticStatus.dead}</li>
          <li>퇴원{this.state.domesticStatus.isolate}</li>
          <li>검사중{this.state.domesticStatus.inspection}</li>
        </ul>
        
      </div>
    );
  }
}

export default App;
