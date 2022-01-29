import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle'; //use for add js functionality, bcz bootstrap written with js
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

const App3 = () => {
  return( 
  <>
  <Navbar/>

    <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/about" component={About} />
       <Route path="/service" component={Service} />
       <Route path="/contact" component={Contact} />
       <Redirect to="/" />
    </Switch>

    <Footer/>
  </>
  );
};

export default App3;
