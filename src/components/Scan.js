import React, { Component } from 'react';
import Header from './Header';
import AtendeesTable from './AtendeesTable'
import QrReader from 'react-qr-reader';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ScanReader extends Component {
  state = {
    delay: 2000,
    result: 'No result',
    modal: false
  }

  scanHandler = (data) => {
    if (data) {
      this.toggle();
      this.setState({
        result: data,
      });
    }
  }

  errorHandler = (err) => {
    console.error(err);
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
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

        <AtendeesTable />

        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Event Name</ModalHeader>
          <ModalBody>
            { this.state.result }
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={this.toggle}>Ok</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ScanReader;

