import { useState, useEffect } from "react";
import "./List.css";
import axios from 'axios';

function List({ itemList ,getItems, isEditMode }) {

  
  // DELETE
  const deleteItem = (id) => {
    axios
      .delete(`/api/groceries/${id}`)
      .then((res) => {
        getItems();
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong!");
      });
  };

  // PUT
  const buyItem = (id) => {
    axios
      .put(`/api/groceries/${id}`)
      .then((res) => {
        getItems();
      })
      .catch((err) => {
        console.error(err);
        alert("Something went wrong!");
      });
  };

  // ToDo: hidden buttons

  useEffect(() => {
    getItems();
  }, []);

  return (
    <div className="List">
      {itemList.map((item) => (
        <div key={item.id} className="Item" onClick={() => {buyItem(item.id)}}>
          <h3 className="Item-header">{item.name}</h3>
          {item.displayImage ? (
            <img src={item.displayImage} alt={item.name} className="Item-image"/>
          ) : (
            <div className="no-image">
              <span>No Image</span>
            </div>
          )}
          <h4 className="Item-quantity">
            {item.quantity + ' ' + item.unit}
          </h4>
          <input type="checkbox" onChange={() => {
                  buyItem(item.id)
                  
                }} checked={item.bought} className="Item-check"></input>
              
          {isEditMode && (
            <div>
                
              <button
                onClick={() => {
                  deleteItem(item.id);
                }}
              >
                Remove
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default List;
