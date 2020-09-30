import React, { useEffect } from 'react';

const Result = ({ selectedWord, wrongChars, correctChars, chances }) => {
    const numUniqueChars = selectedWord
        .split('')
        .filter((char, i, arr) => arr.indexOf(char) === i).length;

    useEffect(() => {
        if (correctChars.length === numUniqueChars) {
            alert("Congratulations! You've guessed the correct word!");
        }

        if (wrongChars.length > chances) {
            alert("Oh no... You've failed to guess the correct word.");
        }
    }, [wrongChars, correctChars, numUniqueChars, chances]);
    return <></>;
};

export default Result;
