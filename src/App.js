import React, { Component } from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Beastselect from './Beastselect.js';
import data from "./Data.json";

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
  }
  render() {
    return (
      <div>
        {/* header! any expression that has to be evaluated needs to go inside of curly brackets - anything javascripty*/}
        <Header /> 
        <Main updateBeast={this.updateBeast} data = {data}/>
        <Footer  />
        <Beastselect featuredBeast={this.state.featuredBeast} handleClose = {this.handleClose} show = {this.state.show}/>
      </div>
    )
  }
}
