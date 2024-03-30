import { useState } from "react";

function Form() {
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
                
            })
            .catch((err) => {
                console.error(err);
                alert("Something went wrong!");
            });
    };
    }
    return(
        <form>

        </form>
    );
}

export default Form;