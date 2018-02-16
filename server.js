//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');

//CONSTANTS
const PORT = process.env.PORT || 3000;

//APPLICATIONS
app.use(bodyParser.json());
app.use(methodOverride('_method'));





app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${PORT}`);
})