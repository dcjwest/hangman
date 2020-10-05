import { useState, useEffect } from 'react';

const API_URL = 'https://random-word-api.herokuapp.com/word';

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
            }
        };
        if (replayCheck || replayCheck === undefined) {
            fetchWord();
            setReplay(false);
        }
    }, [replayCheck, setReplay]);
    return { selectedWord, error };
}
