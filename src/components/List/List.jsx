import { useState, useEffect } from "react";
import "./List.css";

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
        <div key={item.id} className="Item">
          <h3>{item.name}</h3>
          {item.displayImage ? (
            <img src={item.displayImage} alt={item.name} className="List-image"/>
          ) : (
            <div className="no-image">
              <span>No Image</span>
            </div>
          )}
          <h4>
            {item.quantity}
            {item.unit}
          </h4>
          {isEditMode && (
            <div>
              <button
                onClick={() => {
                  buyItem(item.id);
                }}
              >
                Buy
              </button>
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
