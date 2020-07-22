import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App () {
  return (
    <Router>
        <div className='App'>
          <Header />
          <Main />
          <Footer />
        </div>
    </Router>
  );
}

export default App;
