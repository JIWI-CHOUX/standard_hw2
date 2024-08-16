import React from 'react';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';

function App() {
  
  return (
    <div>
      <Header title="My website"></Header>
      <Content></Content>
      <Footer year="2024"></Footer>
    </div>
  );
}

export default App;