require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = process.env.PORT || 3000;
// Connect DB

const conn = require('./config/config');
conn(process.env.MONGO_URL);

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use('/', (req, res)=>{
    res.send('Home Pages')
});
app.use('/api/items', require('./Routes/itemRoute'));

// Route
app.listen(PORT, ()=>{
    console.log(`Server running on port http://localhost:${PORT}`.bgCyan);
});
