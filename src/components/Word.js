import React from 'react';

const Word = ({ selectedWord, correctChars }) => {
    return (
        <>
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
        </>
    );
};

export default Word;
