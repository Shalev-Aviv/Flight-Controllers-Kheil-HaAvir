import './TextContent.css';

interface TextContentProps {
    altitude: string;
    his: string;
    adi: string;
}

function TextContent({ altitude, his, adi }: TextContentProps) {
    return (
        <div className="Content">
            <div className="Bubble">
                <label className="Subject">Altitude</label>
                <span className="Value">{altitude || '{value}'}</span>
            </div>
            <div className="Bubble">
                <label className="Subject">HIS</label>
                <span className="Value">{his || '{value}'}</span>
            </div>
            <div className="Bubble">
                <label className="Subject">ADI</label>
                <span className="Value">{adi || '{value}'}</span>
            </div>
        </div>
    );
}

export default TextContent;