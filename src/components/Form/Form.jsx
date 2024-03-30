import { useState } from "react";
import axios from 'axios';
import "./Form.css"
import Input from "../Input/Input.jsx"

function Form({ getItems}) {
    // Input Variables
    const [itemName, setItemName] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [itemUnit, setItemUnit] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);

    const [inputs, setInputs] = useState([
        {
            head: "Name of Item:",
            class:"Input-field",
            type:"text",
            value:itemName,
            onChange:(e) => {setItemName(e.target.value)},
            placeholder:"Super Cereal"
        },
        {
            head:"Image Link (optional):",
            class:"Input-field",
            type:"text",
            value:itemImage,
            onChange:(e) => {setItemImage(e.target.value)},
            placeholder:"https://"
        },
        {
            head:"Unit:",
            class:"Input-field",
            type:"text",
            value:itemUnit,
            onChange:(e) => {setItemUnit(e.target.value)},
            placeholder:"box"
        },
        {
            head:"Quantity:",
            class:"Input-field",
            type:"number",
            value:itemQuantity,
            onChange:(e) => {setItemQuantity(e.target.value)},
            placeholder:1,
        },
        {
            type:"submit",
            class:"Input-submit",
            value:"Add"
        }
    ]);

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
        <form onSubmit={(e) => {addItem(e)}} className="Form">
            {
                inputs.map((input, index) => (
                    <Input input={input} key={index}/>
                ))
            }
        </form>
    );
}

export default Form;