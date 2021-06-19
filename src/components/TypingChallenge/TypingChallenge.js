import "./TypingChallenge.css";

const TypingChallenge = ({handleOnType, timerStarted, timerValue, selectedParagraph }) => {
    const textChangeHandler=(e)=>{
        handleOnType(e.target.value)
    }

  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">00:{timerValue<10 ?`0${timerValue}`: timerValue}</p>
        <p className="timer-info">{!timerStarted && "Start typing to start the test"}</p>
      </div>

      <div className="textarea-container">
        <div className="textarea-left ">
          <textarea
            className="textarea"
            disabled={true}
            value={selectedParagraph}
          ></textarea>
        </div>
        <div className="textarea-right">
          <textarea
            onChange={textChangeHandler}
            className="textarea"
            placeholder="Start typing here"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge; //Exporting to Typing Challenge Container
