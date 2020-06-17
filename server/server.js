import express from 'express'
import path from 'path'
import routes from './routes/routes'
const port = 3000
const app = express()

app.use(express.static('public'))

routes(app)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))