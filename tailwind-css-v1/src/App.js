import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './pages';
import about from './pages/about';
import contact from './pages/contact';
import menu from './pages/menu';

function App() {
  return (
    <>
      <NavBar />
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
