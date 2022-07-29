const express = require('express')
const routes = require('./src/routes.ts')

const app = express()

app.use(express.static('public'))
app.use(routes)

app.listen(process.env.PORT || 3000, ()=>{
    console.log('server runing')
})