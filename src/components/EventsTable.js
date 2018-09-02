import React from 'react';
import { Table } from 'reactstrap';

class EventsTable extends React.Component {
  render() {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Events</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Party 1</td>
            <td>London</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Party 2</td>
            <td>Miami</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Party 3</td>
            <td>Caracas</td>
          </tr>
          <tr>
            <th scope="row">4</th>
            <td>Party 1</td>
            <td>London</td>
          </tr>
          <tr>
            <th scope="row">5</th>
            <td>Party 2</td>
            <td>Miami</td>
          </tr>
          <tr>
            <th scope="row">6</th>
            <td>Party 3</td>
            <td>Caracas</td>
          </tr>
          <tr>
            <th scope="row">7</th>
            <td>Party 1</td>
            <td>London</td>
          </tr>
          <tr>
            <th scope="row">8</th>
            <td>Party 2</td>
            <td>Miami</td>
          </tr>
          <tr>
            <th scope="row">9</th>
            <td>Party 3</td>
            <td>Caracas</td>
          </tr>
          <tr>
            <th scope="row">10</th>
            <td>Party 1</td>
            <td>London</td>
          </tr>
          <tr>
            <th scope="row">11</th>
            <td>Party 2</td>
            <td>Miami</td>
          </tr>
          <tr>
            <th scope="row">12</th>
            <td>Party 3</td>
            <td>Caracas</td>
          </tr>
          <tr>
            <th scope="row">13</th>
            <td>Party 1</td>
            <td>London</td>
          </tr>
          <tr>
            <th scope="row">14</th>
            <td>Party 2</td>
            <td>Miami</td>
          </tr>
          <tr>
            <th scope="row">15</th>
            <td>Party 3</td>
            <td>Caracas</td>
          </tr>
          <tr>
            <th scope="row">16</th>
            <td>Party 1</td>
            <td>London</td>
          </tr>
          <tr>
            <th scope="row">17</th>
            <td>Party 2</td>
            <td>Miami</td>
          </tr>
          <tr>
            <th scope="row">18</th>
            <td>Party 3</td>
            <td>Caracas</td>
          </tr>
        </tbody>
      </Table>
    )
  }
}

export default EventsTable;