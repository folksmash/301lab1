import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Beastselect from './Beastselect.js';
import data from "./Data.json";

export default class App extends Component {
  
  render() {
    return (
      <div>
        {/* header! any expression that has to be evaluated needs to go inside of curly brackets - anything javascripty*/}
        <Header /> 

        <Main data = {data}/>
        <Footer  />
        <Beastselect show = {'true'}/>
        <Main />
        <Footer  />
      </div>
    )
  }
}
