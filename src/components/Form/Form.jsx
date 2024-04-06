import { useState } from "react";
import axios from 'axios';
import "./Form.css"
import Input from "../Input/Input.jsx"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

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
            placeholder:"Image Link (optional)"
        },
        {
            head:"Unit:",
            class:"Input-field",
            type:"text",
            value:itemUnit,
            onChange:(e) => {setItemUnit(e.target.value)},
            placeholder:"Unit"
        },
        {
            head:"Quantity:",
            class:"Input-field",
            type:"number",
            value:itemQuantity,
            onChange:(e) => {setItemQuantity(e.target.value)},
            placeholder:"Amount",
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
            
            <Box sx={{ p: 1, border: '1px dashed grey', height:'95%'}}>
                <Stack spacing={3}>
                    {
                        inputs.map((input, index) => (
                            <Input input={input} key={index}/>
                        ))
                    }
                    <Button type="submit" variant="contained">Add</Button>
                </Stack>
            </Box>
        </form>
    );
}

export default Form;