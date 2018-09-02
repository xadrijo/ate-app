import React, { Component } from 'react';
import EvensTable from './EventsTable';
import './App.css';
import Header from './Header';
import EventsTable from './EventsTable';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <EventsTable />
      </div>
    );
  }
}

export default App;
