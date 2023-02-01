const express= require('express');
const Joi= require('joi');
const router = express.Router();
const Info=require('./infoSchema')
const axios = require('axios');

router.get('/', async (req, res) => {
    // Get the data from the API
    const posts = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(posts)
    posts.data.forEach(async (post) => {
        // Create a new instance of the Mongoose model
        let newPost = new Info({
            userId: post.userId,
            id: post.id,
            title: post.title,
            body: post.body,
        });

        // Save the instance to the database
        await newPost.save();
    });

    res.send('Posts saved to the database!');
})  

router.get('/:userId', async (req, res) => {
    // Get the userId from the request parameters
    const userId = req.params.userId;
    
    // Retrieve all posts with the matching userId from the database
    const posts = await Info.find({ userId: userId });
    
    // Return the posts in the response
    res.send(posts);
    });


    router.delete('/', async (req, res) => {
        try {
            const deletedData = await Info.deleteMany();
            res.json({ message: 'All data successfully deleted', deletedData });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });


module.exports=router;