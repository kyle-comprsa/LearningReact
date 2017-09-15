import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'

export class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hello World!  <span className="hideMe">To get started, edit <code>src/App.js</code> and save to reload.</span>
        </p>
      </div>
    );
  }
}


export class Header extends Component {
  
  render() {
    return (
      <Router>
      <div className="header clearfix">
        <nav>
      
          <ul className="nav nav-pills float-right">
  
            <li className="nav-item">
              <a className="nav-link active" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Contact">Contact</a>
            </li>
          </ul>
        </nav>  
        <h3 className="text-muted">Project name</h3>
       
        <Route exact  path="/" component={Home}/>
        <Route   path="/About" component={About}/>
        <Route  path="/Contact" component={Contact}/>
 
      </div>
      </Router>
    

     
    
 
    );
  }
}
export class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-3">{this.props.Header}</h1>
        <p className="lead">{this.props.SubText}</p>
        {(this.props.showButton =='true')?
        <p><a className="btn btn-lg btn-success" href="#" role="button">Sign up today</a></p>
        : <p></p>}
      </div>
    );
  }
}
export class  Subheading extends Component { 
  render(){
    return (
      <div className="col-lg-6">
          <h4>Subheading</h4>
          <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>          
        </div>

    );
  }
}
export class  Marketing extends Component { 
  render(){
    return (
      <div className="row marketing">
        <Subheading/><Subheading/><Subheading/>
        <Subheading/><Subheading/><Subheading/>
      </div>
    );
  }
}

export class Container extends Component {
  render() {
    return (
      
        <div className="container">
        
           <Header /> 
            <Jumbotron  Header="Contact Us" SubText="24 hours a day 7 days a week support."/>    
            <Marketing/>
         
        </div>
  
    
    );
  }
}


export class Home extends Component {
  render() {    
    return (    
      <div ><Jumbotron   Header="Home" showButton="true" SubText="Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus."/>   
            <Marketing/></div>
    );
  }
}


export class About extends Component {
  render() {
    return (
      <div className="container"> <Jumbotron  Header="About" SubText="Get to know us..."/>   </div>
    );
  }
}

export class Contact extends Component {
  render() {
    return (
      <div className="container">  <Jumbotron  Header="Contact" SubText="Reach out and contact us "/>  </div>
    );
  }
}


//export class App{};
//export  class Container{};
//export  class Header{};
/* export default App;Container;Header;
  module.exports = {
 app: App,
 Container, Container,
 Header, Header */


