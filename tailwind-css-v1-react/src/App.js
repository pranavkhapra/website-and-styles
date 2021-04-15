import React, { useState, useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';
import './App.css';
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages';
import about from './pages/about';
import contact from './pages/contact';
import menu from './pages/menu';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });
  return (
    <>
      <NavBar toggle={toggle} />
      <DropDown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={about} />
        <Route path="/menu" exact component={menu} />
        <Route path="/contact" exact component={contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
