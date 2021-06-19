import TypingChallengeContainer from "../TypingChallengeContainer/TypingChallengeContainer";
import TryAgain from "./../TryAgain/TryAgain";
import "./TestContainer.css";

const TestContainer = ({
  handleOnType,
  timerStarted,
  timerValue,
  triggerTryAgain,
  selectedParagraph,
  words,
  characters,
  mistakes
}) => {
  return (
    <div className="test-container">
      {/* Show the try again or start screen */}
      {timerValue > 0 ? (
        <div className="typing-challenge-cont">
          <TypingChallengeContainer
            handleOnType={handleOnType}
            timerValue={timerValue}
            timerStarted={timerStarted}
            selectedParagraph={selectedParagraph}
            words ={words}
            characters={characters}
            mistakes = {mistakes}
          />
        </div>
      ) : (
        <div className="try-again-cont">
          <TryAgain triggerTryAgain={triggerTryAgain} words={words} characters = {characters} mistakes={mistakes} />
        </div>
      )}
    </div>
  );
};

export default TestContainer; //Exporting to App.js
