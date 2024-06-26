import React, { useState } from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import List from '../List/List.jsx';
import './App.css';
import Subheader from '../Subheader/Subheader.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


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
            <h2 className="Form-title">Add An Item</h2>
            <Subheader getItems={getItems} itemList={itemList} />
            <h2 className="List-title">List</h2>
            <List itemList={itemList} getItems={getItems} isEditMode={isEditMode}/>
            </main>
        </div>
    );
}

export default App;
