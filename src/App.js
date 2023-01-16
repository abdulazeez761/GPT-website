import './App.css';
import { Blog, Features, Footer, Header, Possibilities, WhatGptIs } from './container'
import { Cta, Brand, NavBar } from './components';
function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
      <Brand />
      <WhatGptIs />
      <Features />
      <Possibilities />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
