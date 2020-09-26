import React from 'react';

const Word = ({ word }) => {
    return (
        <>
            <p className="word">
                {word.split('').map((char, i) => (
                    <span key={i} className="letter">
                        {char}
                    </span>
                ))}
            </p>
        </>
    );
};

export default Word;
