import './ChallengeDetailsCard.css';

const ChallengeDetailsCard = ({ cardName, cardValue }) => {
    return (
        <div className="details-card-container">
            <p className="card-name">{cardName}</p>
            <p className="card-value">{cardValue}</p>
        </div>
    )    
}

export default ChallengeDetailsCard; //Exporting to Typing Challenge Container