import { useState, useEffect } from 'react';
import { randomWords } from './randomWords';

const PROXY = 'https://cors-anywhere.herokuapp.com/';

const API_URL = `${PROXY}https://random-word-api.herokuapp.com/word`;

export default function useFetchWord(replayCheck, setReplay) {
    const [selectedWord, setSelectedWord] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWord = async () => {
            try {
                const res = await fetch(API_URL);
                const data = await res.json();
                setSelectedWord(data[0].toUpperCase());
            } catch (err) {
                setError(err);

                let randomIdx = Math.floor(Math.random() * randomWords.length);
                setSelectedWord(randomWords[randomIdx].toUpperCase());
            }
        };
        if (replayCheck || replayCheck === undefined) {
            fetchWord();
            setReplay(false);
        }
    }, [replayCheck, setReplay]);
    return { selectedWord, error };
}
