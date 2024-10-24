import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import BgChanger from './components/BgChanger'; // Updated path
import BgChangerAuto from './components/BgChangerAuto';
import MediaControlCard from './components/MediaControlCard';
import BgChangerWithCard from './components/BgChangerWithCard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <BgChangerAuto />
    <MediaControlCard /> */}
    <BgChangerWithCard />
  </React.StrictMode>
);

