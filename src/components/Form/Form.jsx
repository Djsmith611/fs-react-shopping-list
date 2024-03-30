import { useState } from "react";
import axios from 'axios';

function Form({setIsEditMode, getItems}) {
    // Input Variables
    const [itemName, setItemName] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [itemUnit, setItemUnit] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);

    // POST
    const addItem = (e) => {
        e.preventDefault();
        const data = {
            name:itemName,
            displayImage:itemImage,
            unit:itemUnit,
            quantity:itemQuantity
        }
        axios
            .post("/api/groceries", data)
            .then((res) => {
                getItems();
                clearInputs();
            })
            .catch((err) => {
                console.error(err);
                alert("Something went wrong!");
            });
    };
    
    const clearInputs = () => {
        setItemImage('');
        setItemName('');
        setItemQuantity(1);
        setItemUnit('');
    }

    return(
        <form onSubmit={(e) => {addItem(e)}}>
            <input type="text" value={itemName} onChange={(e) => {setItemName(e.target.value)}} placeholder="Item name" />
            <input type="text" value={itemImage} onChange={(e) => {setItemImage(e.target.value)}} placeholder="Image Link" />
            <input type="text" value={itemUnit} onChange={(e) => {setItemUnit(e.target.value)}} placeholder="Unit of measurement" />
            Amount:<input type="number" value={itemQuantity} onChange={(e) => {setItemQuantity(e.target.value)}} />
            <input type="submit" value='Add' />
        </form>
    );
}

export default Form;