import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import Word from './components/Word';
import Letters from './components/Letters';
import Notification from './components/Notification';
import Result from './components/Result';
import { showAlert } from './helpers';
import './styles.css';

const API_URL = 'https://random-word-api.herokuapp.com/word';

const App = () => {
    const [playable, setPlayable] = useState(true);
    const [selectedWord, setSelectedWord] = useState('HANGMAN');
    const [correctChars, setCorrectChars] = useState([]);
    const [wrongChars, setWrongChars] = useState([]);
    const [showNotification, setShowNotification] = useState(false);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setSelectedWord(data[0].toUpperCase());
            });
    }, []);

    const handleLetterClick = letter => {
        if (selectedWord.includes(letter)) {
            if (!correctChars.includes(letter)) {
                setCorrectChars(prevCorrectChars => {
                    return [...prevCorrectChars, letter];
                });
            } else showAlert(setShowNotification);
        } else {
            if (!wrongChars.includes(letter)) {
                setWrongChars(prevWrongChars => {
                    return [...prevWrongChars, letter];
                });
            } else showAlert(setShowNotification);
        }
    };

    useEffect(() => {
        const handleKeyDown = e => {
            const { key, keyCode } = e;
            const char = key.toUpperCase();

            if (playable && keyCode >= 65 && keyCode <= 90) {
                if (selectedWord.includes(char)) {
                    if (!correctChars.includes(char)) {
                        setCorrectChars(prevCorrectChars => {
                            return [...prevCorrectChars, char];
                        });
                    }
                } else {
                    if (!wrongChars.includes(char)) {
                        setWrongChars(prevWrongChars => {
                            return [...prevWrongChars, char];
                        });
                    }
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedWord, correctChars, wrongChars, playable]);

    return (
        <div className="App container">
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
                        handleLetterClick={handleLetterClick}
                    />
                </div>
            </div>
            <Notification showNotification={showNotification} />
            {selectedWord && (
                <Result
                    selectedWord={selectedWord}
                    wrongChars={wrongChars}
                    correctChars={correctChars}
                    chances={6}
                />
            )}
        </div>
    );
};

export default App;
