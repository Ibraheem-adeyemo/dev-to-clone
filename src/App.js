import React, { useState } from 'react'
import './App.scss';
import Navigation from './components/Navigation';
import LeftSideBar from './components/LeftSideBar';
import RightSideBar from './components/RightSideBar';
import Content from './components/Content';

function App() {
  const [mobileMenu, setmobileMenu] = useState(false);

    const toggleMobileMenu = () => {
      setmobileMenu(!mobileMenu)
    }
  return (
    <div className="App">
      <Navigation openMenu={toggleMobileMenu} />
      <main className="main-container">
        <LeftSideBar buggerMenu={mobileMenu} closeMenu={toggleMobileMenu} />
        <Content />
        <RightSideBar />
      </main>
    </div>
  );
}

export default App;
