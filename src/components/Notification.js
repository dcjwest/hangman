import React from 'react';

const Notification = ({ showNotification }) => {
    return (
        <div
            className={`notification-wrapper ${showNotification ? 'show' : ''}`}
        >
            <p className="notification">You've already tried that letter</p>
        </div>
    );
};

export default Notification;
