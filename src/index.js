import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Display from './Display';
import Modal from './Modal';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Display/>
    <Modal/>
  </React.StrictMode>
);


