import React, { useState } from 'react';
import AboutTab from './Components/AboutTab';
import NowTab from './Components/NowTab';
import './Styles/App.css';
import FlashingText from './Components/FlashingText';


function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="App">
      <header className="App-header">
        <FlashingText text="90s Retro Love!" />
        <div className={`tab ${activeTab === 'now' ? 'active' : ''}`} onClick={() => setActiveTab('now')}>Now</div>
        <div className={`tab ${activeTab === 'about' ? 'active' : ''}`} onClick={() => setActiveTab('about')}>About</div>
      </header>
      <div className="content-area">
        {activeTab === 'about' ? <AboutTab /> : <NowTab />}
      </div>
    </div>
  );
}

export default App;
