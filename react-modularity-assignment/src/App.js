import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import {ContentA} from './components/ContentA'; 
import {ContentB} from './components/ContentB'; 
import {Button} from './components/SharedComponents';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ContentA />
      <Button button_name="content_a" />
      <ContentB />
      <Button button_name="content_b" />
      <Footer />
    </div>
  );
}

export default App;
