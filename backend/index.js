const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose  = require('mongoose')
const cors = require('cors')
const Post = require('./schema')

app.use(bodyParser.json());
app.use(cors())

const URL = 'mongodb+srv://root:root@cluster0.94n6b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(URL)
  .then(() => {
    console.log('MongoDB connected')
  }).catch(e => {
    console.error(e)
  })

app.post('/api/add', async (req, res) => {
    try {
           const dataArray = req.body
           for(let data of dataArray) {
            try {
                // Create a new instance of the Post model
                const post = new Post(data);
                // Save the data to the database
                await post.save();
                console.log('Data saved successfully:', data);
              } catch (error) {
                console.error('Error saving data:', error);
                throw error
              }
           }
        res.status(201).json({message: 'Successfully saved to database'})
           
    } catch (err) {
        res.status(400).json({message: 'Error while saving to Database'})
    }

  });

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});