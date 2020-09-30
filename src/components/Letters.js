import React from 'react';

const Letters = ({ wrongChars, correctChars, handleLetterClick }) => {
    const alphabet = [...Array(26).keys()].map(charNum =>
        String.fromCharCode(charNum + 65)
    );

    return (
        <div className="input-letter-grid">
            {alphabet.map((char, i) => (
                <div
                    key={i}
                    className={`input-letter ${
                        wrongChars.includes(char)
                            ? 'wrong'
                            : correctChars.includes(char)
                            ? 'correct'
                            : ''
                    }`}
                    onClick={e => handleLetterClick(e.target.innerHTML)}
                >
                    {char}
                </div>
            ))}
        </div>
    );
};

export default Letters;
