import React from 'react';
import './Header.css';
import axios from 'axios';

function Header({ setIsEditMode ,isEditMode, getItems}) {
    
    // PUT
    const resetBoughtStatus = () => {
        axios
            .put('/api/groceries')
            .then((res) => {
                getItems();
            })
            .catch((err) => {
                console.error(err);
                alert('Something went worng!');
            });
    } 

    const toggleEdit = () => {
        setIsEditMode(!isEditMode);
    }
    
    return (
        <header className="Header">
            <h1 className="Header-title">My Shopping List</h1>
            <div className="Header-button-container">
                <button className="Header-edit-button" onClick={toggleEdit}>Edit</button>
                {isEditMode && (
                    <button className="Header-edit-button" onClick={resetBoughtStatus}>Reset</button>
                )}
            </div>
            
            
        </header>
    );
}

export default Header;
