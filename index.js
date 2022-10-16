const express = require('express')
const app = express()
const morgan = require('morgan')
const port = 3000

app.use(morgan('combined'))

app.get('/trangchu', (req, res) => {
  res.send('Hello Dui!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})