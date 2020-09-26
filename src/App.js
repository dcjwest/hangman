import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import Word from './components/Word';
import Letters from './components/Letters';
import Notification from './components/Notification';
import Result from './components/Result';
import './styles.css';

const selectedWord = 'HANGMAN';

function App() {
    const [playable, setPlayable] = useState(true);
    const [correctChars, setCorrectChars] = useState([]);
    const [wrongChars, setWrongChars] = useState([]);

    useEffect(() => {
        const handleKeyDown = e => {
            const { key, keyCode } = e;
            const char = key.toUpperCase();

            if (playable && keyCode >= 65 && keyCode <= 90) {
                if (selectedWord.includes(char)) {
                    if (!correctChars.includes(char)) {
                        setCorrectChars(prevCorrectChars => [
                            ...prevCorrectChars,
                            char,
                        ]);
                    }
                } else {
                    if (!wrongChars.includes(char)) {
                        setWrongChars(prevWrongChars => [
                            ...prevWrongChars,
                            char,
                        ]);
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [correctChars, wrongChars, playable]);

    return (
        <div className="container">
            <Header />
            <div className="game-wrapper flex-center">
                <Figure wrongChars={wrongChars} />
                <div className="letters-wrapper flex-center">
                    <Word
                        selectedWord={selectedWord}
                        correctChars={correctChars}
                    />
                    <Letters
                        wrongChars={wrongChars}
                        correctChars={correctChars}
                    />
                </div>
            </div>
            {/* <Notification />
            <Result /> */}
        </div>
    );
}

export default App;
