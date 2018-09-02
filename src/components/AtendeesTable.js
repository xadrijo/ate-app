import React from 'react';
import { Button, Table } from 'reactstrap';

class AtendeesTable extends React.Component {
  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Info</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" style = {{ width: '20%' }}>1</th>
            <td style = {{ width: '50%' }}>Levon Aronian</td>
            <td style = {{ width: '20%' }}><Button color="success">&nbsp;</Button></td>
          </tr>
          <tr>
            <th scope="row" style = {{ width: '20%' }}>2</th>
            <td style = {{ width: '50%' }}>Fabiano Caruana</td>
            <td style = {{ width: '20%' }}><Button color="danger">&nbsp;</Button></td>
          </tr>
          <tr>
            <th scope="row" style = {{ width: '20%' }}>3</th>
            <td style = {{ width: '50%' }}>Magnus Carlsen</td>
            <td style = {{ width: '20%' }}><Button color="warning">&nbsp;</Button></td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default AtendeesTable;