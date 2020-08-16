import React from 'react';
import './App.css';
import { TitleProvider } from './components/TitleContext';
import { TitleForm } from './components/TitleForm';

function App() {
  return (

    <TitleProvider>
      <TitleForm />
    </TitleProvider>
  );
}

export default App;
