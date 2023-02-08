const express = require('express');
const app = express();

app.use(express.static('public'));

const PORT = process.env.PORT | 80;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
