import React from 'react';

const Letters = ({ wrongChars, correctChars, chances, handleLetterClick }) => {
    const alphabet = [...Array(26).keys()].map(charNum =>
        String.fromCharCode(charNum + 65)
    );

    const handleMouseOver = e => {
        let classes = [...e.target.classList];
        if (!classes.includes('wrong') && !classes.includes('correct')) {
            e.target.classList.add('highlight');
        }
    }

    const handleMouseLeave = e => e.target.classList.remove("highlight");

    const handleClick = e => {
        if (wrongChars.length >= chances) return;
        handleLetterClick(e.target.innerHTML);
    }

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
                    onClick={handleClick}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                >
                    {char}
                </div>
            ))}
        </div>
    );
};

export default Letters;
