require('dotenv').config();
const express = require('express');

const app = express();
app.use(express.json());

const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
    res.send('Welcome to Harmony Haven API');
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


