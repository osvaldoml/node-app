import express from 'express'
import {dirname} from 'path'
import { fileURLToPath} from 'url'

const app = express()

const __dirname = dirname(fileURLToPath(import.meta.url))
console.log(__dirname)

app.set('views', )
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('index'))

app.listen(3000)
console.log('server is listening on port', 3000)