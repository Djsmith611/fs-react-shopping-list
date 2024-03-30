import React from 'react';
import './Header.css';

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
        <header className="banner-header">
            <h1>My Shopping List</h1>
            <button onClick={toggleEdit}>Edit</button>
            {isEditMode && (
                <button onClick={resetBoughtStatus}>Reset Bought Items</button>
            )}
            
        </header>
    );
}

export default Header;
