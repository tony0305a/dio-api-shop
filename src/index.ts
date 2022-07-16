import express from 'express'
import router from './routes'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(router)
 
app.listen(process.env.PORT || 1337, ()=>{
    console.log('server running')
})