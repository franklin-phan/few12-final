import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './Heading'
import BandList from './BandList';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Heading />
        <BandList />
      </div>
    );
  }
}

export default App;
