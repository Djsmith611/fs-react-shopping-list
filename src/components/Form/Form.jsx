import { useState } from "react";

function Form({setIsEditMode, getItems}) {
    // Input Variables
    const [itemName, setItemName] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [itemUnit, setItemUnit] = useState('');
    const [itemQuantity, setItemQuantity] = useState(0);

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
        setItemQuantity(0);
        setItemUnit('');
    }

    return(
        <form onSubmit={() => {addItem(e)}}>
            <input type="text" value={itemName} onChange={() => {setItemName}} placeholder="Item name" />
            <input type="text" value={itemImage} onChange={() => {setItemImage}} placeholder="Image Link" />
            <input type="text" value={itemUnit} onChange={() => {setItemUnit}} placeholder="Unit of measurement" />
            Amount:<input type="number" value={itemQuantity} onChange={() => {setItemQuantity}} />
            <input type="button" value='Add' />
        </form>
    );
}

export default Form;