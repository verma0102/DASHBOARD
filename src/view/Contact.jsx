import axios from "axios";
import { useState } from "react";
import './Style.css';
import { Button, Grid, Typography } from "@mui/material";

const Contact = () => {
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    const getUsers = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setUsers(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getUsers();
  };
  return (
    <div className="content">
      <Grid container spacing={3} justifyContent="center">
        <Grid xs={12} item>
          <Typography gutterBottom variant="h5">
             Axios in react fake store api data use
          </Typography>
        </Grid>
        <Grid xs={12} item>
          <Button onClick={handleClick} variant="contained">
            Fetch Data
          </Button>
        </Grid>
        {users.map(user => (
          <Grid xs={12} sm={6} md={4} lg={3} key={user.id} className="box" item>
            <img src={user.image} alt={user.title} />
            <h3><span>Id:</span>{user.id}</h3>
            <h3><span>Title:</span>{user.title}</h3>
            <h3><span>Price:</span>{user.price}</h3>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default Contact;
