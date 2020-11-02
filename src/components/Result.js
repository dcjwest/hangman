import React, { useState, useEffect, useRef } from 'react';
import Confetti from 'react-confetti';
import { checkWin, useWindowSize } from '../helpers';

const Result = ({ selectedWord, wrongChars, correctChars, chances, fadeOut }) => {
    let result = false, gameWon = false;
    const { width, height } = useWindowSize();
    const [gameComplete, setGameComplete] = useState(false);
    const resultMsg = useRef("");

    if (checkWin(selectedWord, correctChars, wrongChars, chances) === 'win') {
        resultMsg.current = "Congratulations! You've guessed the correct word!\n\n";
        result = true;
        gameWon = true;
    } else if (
        checkWin(selectedWord, correctChars, wrongChars, chances) === 'lose'
    ) {
        resultMsg.current = `Oh no... You've failed to guess the correct word.\nAnswer: ${selectedWord}\n\n`;
        result = true;
    }

    const handleReplay = () => {
        setGameComplete(false);
        fadeOut();
    }

    const handleExit = () => setGameComplete(false);

    useEffect(() => setGameComplete(result), [result]);

    return (
        <div className={`result-wrapper flex-center ${gameComplete? 'active' : ''}`}>
            { gameWon && <Confetti width={width} height={height} /> }
            <div className={`overlay ${gameComplete? 'show' : ''}`} onClick={handleExit}></div>
            <div className={`result flex-center ${gameComplete? 'show' : ''}`}>
                <h3>{resultMsg.current}</h3>
                <div className='flex-center'>
                    <button className={`btn replay-btn ${gameComplete? 'show' : ''}`} onClick={handleReplay}>Play again</button>
                    <button className={`btn exit-btn ${gameComplete? 'show' : ''}`} onClick={handleExit}>I'm done</button>
                </div>
            </div>
        </div>
    );
};

export default Result;
