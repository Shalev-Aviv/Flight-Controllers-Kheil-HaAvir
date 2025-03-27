import React, { useState } from 'react';
import './Controller.css';
import TextContent from './TextContent';
import VisualContent from './VisualContent';
import PlusContent from './PlusContent';

function Controller() {
    const [activeContent, setActiveContent] = useState<React.ReactNode | null>(null);

    const buttonPressed = (buttonId: string) => {
      switch (buttonId) {
        case 'Text':
          setActiveContent(<TextContent />);
          break;
        case 'Visual':
          setActiveContent(<VisualContent />);
          break;
        case 'Plus':
          setActiveContent(<PlusContent />);
          break;
        default:
          setActiveContent(null);
      }
    };
    
    return (
        <div className='Controller'>
          <div className='Buttons'>
            <button className='Button' id='Text' onClick={(event) => buttonPressed(event.currentTarget.id)}>TEXT</button>
            <button className='Button' id='Visual' onClick={(event) => buttonPressed(event.currentTarget.id)}>VISUAL</button>
            <button className='Button' id='Plus' onClick={(event) => buttonPressed(event.currentTarget.id)}>+</button>
          </div>
          <div className='Display-area' style={{ marginTop: '20px' }}>
            {activeContent}
          </div>
        </div>
    );
}
    
export default Controller;