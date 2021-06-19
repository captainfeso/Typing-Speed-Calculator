import TypingChallenge from "../TypingChallenge/TypingChallenge";
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";

const TypingChallengeContainer = ({
  handleOnType,
  timerStarted,
  timerValue,
  selectedParagraph,
  words,
  characters,
  mistakes
}) => {
  return (
    <div className="typing-challenge-container">
      <div className="details-container">
        {/* Words Typed */}
        <ChallengeDetailsCard cardName="Words" cardValue={words} />

        {/* Characters Typed */}
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />

        {/* Mistakes */}
        <ChallengeDetailsCard cardName="Mistakes" cardValue={mistakes} />
      </div>

      {/* Typing Challenge */}
      <div className="type-challenge-cont">
        <TypingChallenge
          handleOnType={handleOnType}
          timerValue={timerValue}
          timerStarted={timerStarted}
          selectedParagraph={selectedParagraph}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer; //Exporting to Test Container
