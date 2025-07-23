// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const postRoutes = require('./routes/posts');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'your_connection_string');

app.use('/posts', postRoutes); // ✅ This must exist

app.get('/', (req, res) => {
  res.send('Blog API running');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
