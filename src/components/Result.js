import React, { useState, useEffect, useRef } from 'react';
import { checkWin } from '../helpers';

const Result = ({ selectedWord, wrongChars, correctChars, chances, init }) => {
    let result = false;
    const [gameComplete, setGameComplete] = useState(false);
    const resultMsg = useRef("");

    if (checkWin(selectedWord, correctChars, wrongChars, chances) === 'win') {
        resultMsg.current = "Congratulations! You've guessed the correct word!\n\n";
        result = true;
    } else if (
        checkWin(selectedWord, correctChars, wrongChars, chances) === 'lose'
    ) {
        resultMsg.current = `Oh no... You've failed to guess the correct word.\nAnswer: ${selectedWord}\n\n`;
        result = true;
    }

    const handleReplay = () => {
        init();
        setGameComplete(false);
    }

    const handleExit = () => setGameComplete(false);

    useEffect(() => setGameComplete(result), [result]);

    return (
        <div className={`result-wrapper flex-center ${gameComplete? 'active' : ''}`}>
            <div className={`overlay ${gameComplete? 'show' : ''}`} onClick={handleExit}></div>
            <div className={`result flex-center ${gameComplete? 'show' : ''}`}>
                <h3>{resultMsg.current}</h3>
                <div className='flex-center'>
                    <button className='replay-btn' onClick={handleReplay}>Play again</button>
                    <button className='exit-btn' onClick={handleExit}>I'm done</button>
                </div>
            </div>
        </div>
    );
};

export default Result;
