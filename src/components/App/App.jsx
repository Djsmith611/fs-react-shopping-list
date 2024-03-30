import React, { useState } from 'react';

import Header from '../Header/Header.jsx'
import Form from '../Form/Form.jsx'
import List from '../List/List.jsx'

import './App.css';


function App() {
    const [itemList, setItemList] = useState([]);
    const [isEditMode, setIsEditMode] = useState(false);

    // GET
    const getItems = () => {
        axios
        .get("/api/groceries")
        .then((res) => {
            setItemList(res.data);
        })
        .catch((err) => {
            console.error(err);
            alert("Something went wrong!");
        });
    };

    // PUT

    // DELETE

    return (
        <div className="App">
            <Header setIsEditMode={setIsEditMode} getItems={getItems} isEditMode={isEditMode} />
            <main>
                <p>Under Construction...</p>
            <Form />
            <h2>Shopping List</h2>
            <List itemList={itemList} getItems={getItems} isEditMode={isEditMode}/>
            </main>
        </div>
    );
}

export default App;
