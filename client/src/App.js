import React, { useState } from "react";

import axios from "axios";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import TextField from '@mui/material/TextField';



const App = () => {
  const [posts, setPosts] = useState([]);
  const [userId, setUserId] = useState("");

  const handleGetAllPosts = async () => {
    const res = await axios.get("http://localhost:4001/api/data");
    setPosts(res.data);
  };

  const handleGetPostByUserId = async () => {
    const res = await axios.get(`http://localhost:4001/api/data/${userId}`);
    setPosts(res.data);
  };
console.log(posts)
  return (
    <div style={{ backgroundColor:"#47C5EE"}}>
      <div style={{display:"flex", justifyContent:"center" }}>

         <Card sx={{ maxWidth: 345, backgroundColor:"lightblue", color:"white"}}>
      <CardMedia
        sx={{ height: 200 }}
        image="data:image/jpeg;base64,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"
        title="green iguana"
        />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{color:"black"}}>
          Json Place Holder!
        </Typography>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Choose user id"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setUserId(e.target.value)}
          />
      </CardContent>
      <CardActions>
        <Button onClick={handleGetAllPosts}>Get All Posts</Button>
        <Button onClick={handleGetPostByUserId}>Get Posts by User Id</Button>
      </CardActions>
    </Card>
    </div>

    
 
   <TableContainer  style={{height: "100%", overflowX: 'hidden', overflowY: 'hidden'}}>
      <Table sx={{ minWidth: 650}} aria-label="simple table">
        <TableHead style={{backgroundColor:"#010135",position:'sticky', top:0}}>
          <TableRow >
            <TableCell align="left" style={{color:"white"}}>Counter</TableCell>
            <TableCell align="center" style={{color:"white"}}>Title</TableCell>
            <TableCell  align="right" style={{color:"white"}}>Body</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{backgroundColor:"#47C5EE"}}>
          {posts.map((post,index) => (
            <TableRow
              key={post.id}
              sx={{ 
                '&:last-child td, &:last-child th': { border: 0 },
                transition: 'transform 0.2s','&:hover': {
                  transform: 'scale(1.01)',
               }
              }}
            
              >
              <TableCell align="left">{index+1}</TableCell>
              <TableCell align="center">{post.title}</TableCell>
              <TableCell align="right">{post.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      

    
  </div>
  );
};

export default App;