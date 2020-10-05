import React, { useEffect } from 'react';

const Result = ({ selectedWord, wrongChars, correctChars, chances, init }) => {
    useEffect(() => {
        const numUniqueChars = selectedWord
            .split('')
            .filter((char, i, arr) => arr.indexOf(char) === i).length;

        if (correctChars.length === numUniqueChars) {
            setTimeout(() => {
                if (
                    window.confirm(
                        "Congratulations! You've guessed the correct word!\n\n Play again?"
                    )
                )
                    init();
            }, 1000);
        }

        if (wrongChars.length === chances) {
            setTimeout(() => {
                if (
                    window.confirm(
                        `Oh no... You've failed to guess the correct word.\nAnswer: ${selectedWord}\n\n Play again?`
                    )
                )
                    init();
            }, 1000);
        }
    }, [selectedWord, wrongChars, correctChars, chances, init]);
    return <></>;
};

export default Result;
