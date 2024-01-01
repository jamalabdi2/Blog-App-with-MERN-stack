const express = require('express')
const cors = require('cors')

require('dotenv').config()

const app = express()

app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 5890

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
