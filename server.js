const express= require('express')
const app=express();
const db=require("./db")
const cors= require('cors')
app.use(cors())
app.use(express.json())

app.get('/users', (req, res) => {
    db.query('SELECT * FROM users', (err, results) => {
      if (err) return res.status(500).send(err);
      res.json(results);
    });
  });
  
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
  