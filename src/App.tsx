import React from 'react';
import './App.css';
import { HeaderTemplate, HomePage, FooterTemplate } from './config/config';

function App() {
  return (
    <div className="App">
        <HeaderTemplate />
        <HomePage />
        <FooterTemplate />
    </div>
  );
}

export default App;
