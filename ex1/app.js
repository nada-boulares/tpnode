const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let posts = [
  { id: 1, title: 'Post 1', content: 'Content of post 1' },
  { id: 2, title: 'Post 2', content: 'Content of post 2' },
  { id: 3, title: 'Post 3', content: 'Content of post 3' }
];

app.get('/auth/login', (req, res) => {

  res.send('<h1>Login Page</h1>');
});

app.post('/auth/login', (req, res) => {
  
  res.send('<h1>Login Page (POST)</h1>');
});


app.get('/auth/register', (req, res) => {
  res.sendFile(__dirname + '/public/register.html');
});


app.get('/post/all', (req, res) => {
  
  res.json(posts);
})
app.get('/post/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(post => post.id === postId);
  if (post) {
    res.json(post);
  } else {
    res.status(404).json({ error: 'Post not found' });
  }
});


app.use(express.static('public'));


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
