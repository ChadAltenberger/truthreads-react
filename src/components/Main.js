import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { FEATURED } from '../shared/featured';

// COMPONENTS
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import About from './About';
import Services from './Services';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      featured: FEATURED
    };
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path='/Home' component={Home} />
          <Route exact path='/about-us' component={About} />
          <Route exact path='/services' component={Services} />
          <Route path='/featured/' />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default Main;
