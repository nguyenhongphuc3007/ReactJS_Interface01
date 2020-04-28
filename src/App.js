import React, { Component } from 'react';
import './App.css';
import TopMenu from './Components/TopMenu';
import Header from './Components/Header';
import Section from './Components/Section';


class App extends Component {
  render() {
    return (
      <div>
        <TopMenu/>
        <Header/>
        <Section title = "For those about to rock..." position1="order-lg-2" position2="order-lg-1" img="img/01.jpg"/>
        <Section title = "For those about to rock..." position1="order-lg-1" position2="order-lg-2" img="img/02.jpg"/>
      </div>
    );
  }
}

export default App;



