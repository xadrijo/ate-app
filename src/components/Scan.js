import React, { Component } from 'react';
import Header from './Header';
import QrReader from 'react-qr-reader';

class ScanReader extends Component {
  state = {
    delay: 2000,
    result: 'No result'
  }

  scanHandler = (data) => {
    if (data) {
      this.setState({
        result: data,
      });
    }
  }

  errorHandler = (err) => {
    console.error(err);
  }

  render () {
    return(
      <div className="container">
        <Header />
        <div style = {{ marginTop: '20px' }}>
          <QrReader
            delay = {this.state.delay}
            onError = {this.errorHandler}
            onScan = {this.scanHandler}
            style = {{ width: '100%' }}
          />
          <div style = {{ marginTop: '20px' }}>
            <div>
              { this.state.result }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScanReader;

