const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// 🔁 Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://beokd64:85211@cluster0.cbtbxx0.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
