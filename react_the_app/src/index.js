import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import '../node_modules/jquery/dist/jquery.min.js'
// import '../node_modules/jquery/dist/jquery.min.map'
// // import $ from "jquery";
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css.map'
import './narrow-jumbotron.css';
// import 'https://code.jquery.com/jquery-3.2.1.min.js'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
// import App from './App';
// import Header from './App';
// import Container from './App';
import {App,Header,Container,Home,About,Contact} from './App';
import registerServiceWorker from './registerServiceWorker';



<div>
<Router>
<div>
    <Route exact path="/" component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="/Contact" component={Contact}/>
</div>
</Router>
</div>

ReactDOM.render(<Home />, document.getElementById('root'));

//DOMContentLoaded.render(<Header/>, document.getElementsByClassName('Container') )
registerServiceWorker();
