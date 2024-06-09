const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const todoSchema = new mongoose.Schema({
  task: String,
  completed: Boolean,
});
const Todo = mongoose.model('Todo', todoSchema);

const app = express();
const PORT = process.env.PORT || 5000;app.use(cors());
app.use(express.json());// Connect to MongoDB
mongoose.connect('mongodb+srv://heinrichfromtweetor:passwordheinrich@thecluster.z5hc9fl.mongodb.net/?retryWrites=true&w=majority&appName=TheCluster', {});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
