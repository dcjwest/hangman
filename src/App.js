import React from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import Word from './components/Word';
import Letters from './components/Letters';
import Notification from './components/Notification';
import Result from './components/Result';
import './styles.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Figure />
            {/* <Word />
            <Letters />
            <Notification />
            <Result /> */}
        </div>
    );
}

export default App;
