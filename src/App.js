import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Beastselect from './Beastselect.js';
import data from "./Data.json";
import Hornform from "./Hornform.js";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: true,
      featuredBeast: {}
      
    }
  }
  
  handleClose = () => {
    this.setState({ show: false })
  }

openModal = ()  => {
  this.setState({show: true})
} 
  updateBeast = (data) => {
    this.setState(
      {featuredBeast: data}
    )
    this.openModal();
  };


  filterBeasts = (selection) => {
    let hornNum = selection;
    let hornsArray;
    if (hornNum === "one") {
      hornsArray = data.filter((animal) => animal.horns === 1);
      this.setState({ showBeasts: hornsArray });
    } else if (hornNum === "two") {
      hornsArray = data.filter((animal) => animal.horns === 2);
      this.setState({ showBeasts: hornsArray });
    } else if (hornNum === "three") {
      hornsArray = data.filter((animal) => animal.horns >= 3);
      this.setState({ showBeasts: hornsArray });
    } else {
      this.setState({ showBeasts: data });
    }
  };


  render() {
    return (
      <div>
        <Header />
        <Hornform filterBeasts={this.filterBeasts}/>
        <Main updateBeast={this.updateBeast} data = {data}/>
        <Footer  />
        <Beastselect featuredBeast={this.state.featuredBeast} handleClose = {this.handleClose} show = {this.state.show}/>
      </div>
    )
  }
}
