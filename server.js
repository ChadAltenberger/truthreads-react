const express = require('express');
const app = express();

// Set port
const port = process.env.PORT || 3001;

// app.use(express.static(__dirname + '/public'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
}

// Set up routes
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => console.log('server running'));
