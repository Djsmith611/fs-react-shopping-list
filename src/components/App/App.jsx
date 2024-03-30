import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import List from '../List/List.jsx';
import './App.css';
import Subheader from '../Subheader/Subheader.jsx';


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

    return (
        <div className="App">
            <Header setIsEditMode={setIsEditMode} getItems={getItems} isEditMode={isEditMode} />
            <main className="App-main">
            <Subheader getItems={getItems} itemList={itemList} />
            <List itemList={itemList} getItems={getItems} isEditMode={isEditMode}/>
            </main>
        </div>
    );
}

export default App;
