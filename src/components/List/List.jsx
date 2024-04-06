import { useState, useEffect } from "react";
import "./List.css";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";

function List({ itemList, getItems, isEditMode }) {
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
        <Card
          variant="outlined"
          key={item.id}
          onClick={() => {
            buyItem(item.id);
          }}
          sx={{
            width: "25%",
            marginBottom: "20px",
            backgroundColor: "#3f50b5",
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="Item">
                I
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={item.name}
            subheader={item.quantity + " " + item.unit}
          />
          {item.displayImage ? (
            <CardMedia
              component="img"
              height="194"
              image={item.displayImage}
              alt={item.name}
            />
          ) : (
            <div className="no-image">
              <span>No Image</span>
            </div>
          )}
          <CardActions>
            <Checkbox
              onChange={() => {
                buyItem(item.id);
              }}
              checked={item.bought}
              color="secondary"
            />
            {isEditMode && (
              <Button
                size="small"
                onClick={() => {
                  deleteItem(item.id);
                }}
                color="error"
              >
                Remove
              </Button>
            )}
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default List;
