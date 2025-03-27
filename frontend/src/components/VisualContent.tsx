import React from 'react';
import './VisualContent.css';

interface VisualContentProps {
  altitude: string;
  his: string;
  adi: string;
}

interface CustomCSSProperties extends React.CSSProperties {
  [key: string]: string | number | undefined;
}

function VisualContent({ altitude, his, adi }: VisualContentProps) {
    const altitudeNumber = parseInt(altitude, 10);
    const maskPercentage = isNaN(altitudeNumber) ? 0 : (altitudeNumber / 3000) * 100;
    const adiValue = parseInt(adi, 10);
    const adiThreshold = isNaN(adiValue) ? 50 : ((adiValue + 100) / 200) * 100;
    const hisValue = parseInt(his, 10) || 0;

    const barStyle: CustomCSSProperties = {
        '--mask-percentage': `${maskPercentage}%`,
    };
    const adiStyle: CustomCSSProperties = {
        '--adi-threshold': `${adiThreshold}%`,
    };
    const hisStyle: CustomCSSProperties = {
        '--his-rotation': `${hisValue}deg`,
    };

    return (
      <div className="Content">
          <div className="Altitude">
              <div className="Bar" style={barStyle}>
                  <span className='Value'>3000</span>
                  <span className='Value'>2000</span>
                  <span className='Value'>1000</span>
                  <span className='Value'>0</span>
              </div>
          </div>
          <div className="HSI">
              <div className="Circle Clock">
                  <img src="arrow.png" alt='Arrow' className='Arrow' />
                  <div className="HSI-Numbers" style={hisStyle}>
                      <span id='first'>0</span>
                      <span id='second'>90</span>
                      <span id='third'>180</span>
                      <span id='forth'>270</span>
                  </div>
              </div>
          </div>
          <div className="ADI">
              <div className="Circle View" style={adiStyle}></div>
          </div>
      </div>
    );
}

export default VisualContent;