import React from 'react';
import './Header.css';

function Header({ setIsEditMode }) {
    
    return (
        <header className="banner-header">
            <h1>My Shopping List</h1>
            <button onClick={setIsEditMode}>Edit</button>
        </header>
    );
}

export default Header;
