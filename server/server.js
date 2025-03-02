import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT ||3000;

app.use(express.json()); // For parsing JSON 
app.use(express.static(path.resolve('public')));


app.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.get('/add-page', (req, res) => {
  res.sendFile(path.resolve('frontend/add.html'));
});

app.get('/calculator', (req, res) => {
  res.sendFile(path.resolve('frontend/calculator.html'));
});

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  const sum = num1 + num2;
  res.json({ sum: sum });
});

app.get('/user/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    if(isNaN(userId)){
        return res.status(400).json({error: "invalid id"});
    }

    // Simulate user data (replace with database lookup in real app)
    const users = {
        1: { id: 1, name: 'Alice' },
        2: { id: 2, name: 'Bob' },
    };

    const user = users[userId];

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ error: 'User not found' });
    }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
export {app} // Export for testing