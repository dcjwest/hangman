import { useState, useEffect } from 'react';
import { randomWords } from './randomWords';

export default function useFetchWord(replayCheck, setReplay) {
    const [selectedWord, setSelectedWord] = useState('');

    

    useEffect(() => {
        /*  BROKEN: Random Word API not available.
            TOD0: Create own API .
        */
        // const fetchWord = async () => {
        //     const PROXY = 'https://cors-anywhere.herokuapp.com/';
        //     const API_URL = `${PROXY}https://random-word-api.herokuapp.com/word`;
        //     try {
        //         const res = await fetch(API_URL);
        //         const data = await res.json();
        //         setSelectedWord(data[0].toUpperCase());
        //     } catch (err) {
        //         setError(err);

        //         let randomIdx = Math.floor(Math.random() * randomWords.length);
        //         setSelectedWord(randomWords[randomIdx].toUpperCase());
        //     }
        // };

        /* Get word using hard-coded strings from randomWords.js */
        const fetchWord = () => {
            let randomIdx = Math.floor(Math.random() * randomWords.length);
            setSelectedWord(randomWords[randomIdx].toUpperCase());
        };

        if (replayCheck || replayCheck === undefined) {
            fetchWord();
            setReplay(false);
        }
    }, [replayCheck, setReplay]);
    return { selectedWord };
}
