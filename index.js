import express from 'express';

const app = express();
app.get('/', (req, res) => {
  res.send('Hello World hi');
});

app.put('/put', (req, res) => {
  res.send('Hello World put');
});
app.delete('/delete', (req, res) => {
  res.send('Hello World delete');
});
app.post('/post', (req, res) => {
  res.send('Hello World post');
});
app.listen(3000);