import './TryAgain.css';

const TryAgain = ({triggerTryAgain, words, characters, mistakes}) => {
    return (
        <div className="try-again-container">
            <h1>Test Results</h1>

            <div className="result-container">
                {/* Test Results */}
                <p><b>Characters: </b>{characters}</p>
                <p><b>Mistakes: </b>{mistakes}</p>
                <p><b>Words typed</b>{words}</p>
                <p><b>Speed: </b>{words * 2} per minute!</p>

            </div>

            <button onClick={triggerTryAgain} className="start-again-btn">
                Start Again
            </button>
        </div>
    )
}

export default TryAgain; //Exporting to Test Container