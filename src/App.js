import React, { useState, useEffect } from 'react';
import useFetchWord from './useFetchWord';
import Header from './components/Header';
import Figure from './components/Figure';
import Word from './components/Word';
import Letters from './components/Letters';
import Notification from './components/Notification';
import Result from './components/Result';
import { showAlert } from './helpers';
import './styles.css';

const App = () => {
    const [playable, setPlayable] = useState(true);
    const { selectedWord } = useFetchWord(playable, setPlayable);
    const [correctChars, setCorrectChars] = useState([]);
    const [wrongChars, setWrongChars] = useState([]);
    const [showNotification, setShowNotification] = useState(false);
    const [showBlackScreen, setShowBlackScreen] = useState(false);

    const init = () => {
        setCorrectChars([]);
        setWrongChars([]);
    };

    const fadeOut = () => setShowBlackScreen(true);

    const fadeIn = () => {
        if (showBlackScreen) {
            init();
            setPlayable(true);
            setShowBlackScreen(false);
        }
    }

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

            if (keyCode >= 65 && keyCode <= 90) {
                if (selectedWord.includes(char)) {
                    if (!correctChars.includes(char)) {
                        setCorrectChars(prevCorrectChars => {
                            return [...prevCorrectChars, char];
                        });
                    } else showAlert(setShowNotification);
                } else {
                    if (!wrongChars.includes(char)) {
                        setWrongChars(prevWrongChars => {
                            return [...prevWrongChars, char];
                        });
                    } else showAlert(setShowNotification);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedWord, correctChars, wrongChars]);

    return (
        <div className="App container">
            <div onTransitionEnd={fadeIn} className={`black-screen ${showBlackScreen? 'show' : ''}`}></div>
            <Header />
            <div className="game-wrapper flex-center">
                <Figure wrongChars={wrongChars} />
                <div className="letters-wrapper flex-center">
                    <Word
                        selectedWord={selectedWord}
                        correctChars={correctChars}
                        numMistakes={wrongChars.length}
                        chances={6}
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
                    fadeOut={fadeOut}
                />
            )}
        </div>
    );
};

export default App;
