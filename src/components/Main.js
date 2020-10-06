import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Services from './Services';
import FeaturedWork from './FeaturedWork';

class Main extends Component {
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/Home' component={Home} />
          <Route exact path='/about-us' component={About} />
          <Route exact path='/services' component={Services} />
          <Route path='/featured' component={FeaturedWork} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default Main;
