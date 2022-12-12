import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import './App.css';
import MainLayout from './components/MainLayout';

function App() {
  return (
    <div className="App container-fluid">
      <MainLayout />
    </div>
  );
}

export default App;
