const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// Fallback to index.html for single-page applications
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
