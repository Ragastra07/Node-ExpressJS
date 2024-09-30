import express from 'express'
import request from 'supertest'
import cookieParser from 'cookie-parser';

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`clolo + ${req.query.name}`)
})

app.post('/showup', (req, res) => {
    console.log(req.body);
    // const {firstName, lastName} = req.body;
    // res.send(`clolo + ${firstName} ${lastName}`)
    res.send(`clolo `);
  })

app.get('/tara', (req, res) => {
  res.send('Hello tara')
})

app.listen(3000, () => {
  console.info('listening on port 3000...')
})
