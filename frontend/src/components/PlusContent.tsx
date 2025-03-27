import React, { useState } from 'react';
import './PlusContent.css';

interface PlusContentProps {
    onSend: (altitude: string, his: string, adi: string) => void;
}

function PlusContent({ onSend }: PlusContentProps) {
    const [altitudeInput, setAltitudeInput] = useState('');
    const [hisInput, setHisInput] = useState('');
    const [adiInput, setAdiInput] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSendClick = async () => {
        setErrorMessage('');
        
        if (!altitudeInput || !hisInput || !adiInput) {
            setErrorMessage('Please fill in all three fields.');
            return;
        }

        const altitudeValue = parseInt(altitudeInput, 10);
        const hisValue = parseInt(hisInput, 10);
        const adiValue = parseInt(adiInput, 10);

        if (isNaN(altitudeValue) || altitudeValue < 0 || altitudeValue > 3000) {
            setErrorMessage('Altitude must be a number between 0 and 3000.');
            return;
        }

        if (isNaN(hisValue) || hisValue < 0 || hisValue > 360) {
            setErrorMessage('HIS must be a number between 0 and 360.');
            return;
        }

        if (isNaN(adiValue) || adiValue < -100 || adiValue > 100) {
            setErrorMessage('ADI must be a number between -100 and 100.');
            return;
        }

        // Send data to backend
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/data`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ HIS: hisValue, ADI: adiValue, Altitude: altitudeValue })
            });
            const result = await response.json();
            console.log(result);
        }
        catch (error) {
            console.error("Error sending data:", error);
        }

        onSend(altitudeInput, hisInput, adiInput); // Pass the input values to Controller if needed
    };

    const handleResetClick = () => {
        setAltitudeInput('');
        setHisInput('');
        setAdiInput('');
        setErrorMessage('');
    };

    return (
        <div className='Centent'>
            <div className="Data">
                <div className="Infos">
                    <label className="Info">Altitude:</label>
                    <label className="Info">HIS:</label>
                    <label className="Info">ADI:</label>
                </div>
                <div className="Inputs">
                    <span className='Input-description'>Enter a value between 0 to 3000</span>
                    <input type="number" className="Input" placeholder='Number here' value={altitudeInput} onChange={(e) => setAltitudeInput(e.target.value)}/>
                    <span className='Input-description'>Enter a value between 0 to 360</span>
                    <input type="number" className="Input" placeholder='Number here' value={hisInput} onChange={(e) => setHisInput(e.target.value)}/>
                    <span className='Input-description'>Enter a value between -100 to 100</span>
                    <input type="number" className="Input" placeholder='Number here' value={adiInput} onChange={(e) => setAdiInput(e.target.value)}/>
                </div>
            </div>
            <div className="CTAs">
                <button className="CTA" id='Reset' onClick={handleResetClick}>Reset</button>
                <button className="CTA" id='Send' onClick={handleSendClick}>Send</button>
            </div>
            {errorMessage && <p style={{ color: 'red', marginTop: '10px' }}>{errorMessage}</p>}
        </div>
    );
}

export default PlusContent;