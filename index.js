const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());


// Middleware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Routes
const alerts = require('./routes/alerts');
app.use('/api', alerts);

// Connect to MongoDB
mongoose.connect('mongodb+srv://deshwalamit339:dpYiOyUXoZHoHKmc@cluster0.fytucsr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));



// // mongodb+srv://deshwalamit339:dpYiOyUXoZHoHKmc@cluster0.fytucsr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

