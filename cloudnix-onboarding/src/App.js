import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Wizard from './components/Wizard';

function App() {
  return (
    <div className="App">
      <Header />
      <Wizard />
      <Footer />
    </div>
  );
}

export default App;
