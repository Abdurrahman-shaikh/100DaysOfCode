const express = require('express');
const app = express();

app.get('/signup', (req, res) => {
  res.send('/signup');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');

  app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // code to create a new user account
    res.send(`Username: ${username}, Password: ${password}`);
  });
});
