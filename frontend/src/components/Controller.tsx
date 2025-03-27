import React, { useState } from 'react';
import './Controller.css';
import TextContent from './TextContent';
import VisualContent from './VisualContent';
import PlusContent from './PlusContent';

function Controller() {
  const [activeContent, setActiveContent] = useState<React.ReactNode | null>(null);
  const [altitudeValue, setAltitudeValue] = useState('');
  const [hisValue, setHisValue] = useState('');
  const [adiValue, setAdiValue] = useState('');

  const handlePlusSend = (altitude: string, his: string, adi: string) => {
    setAltitudeValue(altitude);
    setHisValue(his);
    setAdiValue(adi);
  };
  const handleButtonClick = (buttonId: string) => {
    switch (buttonId) {
      case 'Text':
        setActiveContent(<TextContent altitude={altitudeValue} his={hisValue} adi={adiValue} />);
        break;
      case 'Visual':
        setActiveContent(<VisualContent altitude={altitudeValue} his={hisValue} adi={adiValue} />);
        break;
      case 'Plus':
        setActiveContent(<PlusContent onSend={handlePlusSend} />);
        break;
      default:
        setActiveContent(null);
    }
  };
  return (
    <div className='Controller'>
      <div className='Buttons'>
        <button className='Button' id='Text' onClick={() => handleButtonClick('Text')}>TEXT</button>
        <button className='Button' id='Visual' onClick={() => handleButtonClick('Visual')}>VISUAL</button>
        <button className='Button' id='Plus' onClick={() => handleButtonClick('Plus')}>+</button>
      </div>
      <div className='Display-area'>
        {activeContent}
      </div>
    </div>
  );
}

export default Controller;