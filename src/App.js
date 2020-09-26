import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// COMPONENTS
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Home />
      <Switch>
        <Route path='/about-us'>
          <About />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
