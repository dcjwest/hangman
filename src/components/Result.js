import React from 'react';
import { checkWin } from '../helpers';

const Result = ({ selectedWord, wrongChars, correctChars, chances, init }) => {
    let gameComplete = false,
        resultMsg = "Congratulations! You've guessed the correct word!";

    if (checkWin(selectedWord, correctChars, wrongChars, chances) === 'win') {
        resultMsg = "Congratulations! You've guessed the correct word!\n\n";
        gameComplete = true;
    } else if (
        checkWin(selectedWord, correctChars, wrongChars, chances) === 'lose'
    ) {
        resultMsg = `Oh no... You've failed to guess the correct word.\nAnswer: ${selectedWord}\n\n`;
        gameComplete = true;
    }

    return (
        <div
            className={`result-wrapper flex-center ${
                gameComplete ? 'show' : ''
            }`}
        >
            <div className="overlay"></div>
            <div className="result flex-center">
                <h3>{resultMsg}</h3>
                <button onClick={init}>Play Again?</button>
            </div>
        </div>
    );
};

export default Result;
