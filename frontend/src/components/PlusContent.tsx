import './PlusContent.css';
function PlusContent() {
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
                    <input className="Input" placeholder='Number here'></input>
                    <span className='Input-description'>Enter a value between 0 to 360</span>
                    <input className="Input" placeholder='Number here'></input>
                    <span className='Input-description'>Enter a value between -100 to 100</span>
                    <input className="Input" placeholder='Number here'></input>
                </div>
            </div>
            <div className="CTAs">
                <button className="CTA" id='Reset'>Reset</button>
                <button className="CTA" id='Apply'>Apply</button>
            </div>
        </div>
    );
}

export default PlusContent;