import React from 'react';

const Word = ({ selectedWord, correctChars, numMistakes, chances }) => {
    return (
        <div className="word-wrapper flex-center">
            <div className="mistakes">
                {`Mistakes (${numMistakes}/${chances})`}
            </div>
            <div className="word flex-center">
                {selectedWord.split('').map((char, i) => (
                    <div key={i} className="letter">
                        <span
                            className={`${
                                correctChars.includes(char) ? 'show' : ''
                            }`}
                        >
                            {char}
                        </span>
                        <div className="underline"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Word;
