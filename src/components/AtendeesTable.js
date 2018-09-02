import React from 'react';
import { Table } from 'reactstrap';

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
            <th scope="row">1</th>
            <td>Levon Aronian</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Nigel Short</td>
            <td></td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Gary Kasparov</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default AtendeesTable;