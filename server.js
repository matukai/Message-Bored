//MODULES
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const methodOverride = require('method-override');
const userRoutes = require('./routes/users');
const topicRoutes = require('./routes/topics');
const messageRoutes = require('./routes/messages');


//CONSTANTS
const PORT = process.env.PORT || 8080;

//APPLICATIONS
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.use('/api/users', userRoutes);
app.use('/api/topics', topicRoutes);
app.use('/api/messages', messageRoutes);

app.use(express.static('public'));
app.get('/*', (req, res) => {
  // res.send('smoke test')
  var options = {
    root:__dirname + '/public',
  };
  res.sendFile('index.html', options);
})



app.listen(PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${PORT}`);
})