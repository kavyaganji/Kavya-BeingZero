const express = require('express')
const app = express()
const port = process.env.PORT || 3000
app.use(express.static('public'))
app.get('/', (req, res) => res.sendFile(__dirname+'/public/html/index.html'))
app.get('/resume',(req , res) => res.sendFile(__dirname+'/public/html/resume.html'))
app.get('/login',(req,res) => res.send('Login'))
app.get('/register',(req,res) => res.send('Register'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var obj={}
obj.name="Kavya"
obj.college="CMRCET"
obj.regno="17H51A0521"

app.get('/data',(req , res) => res.json(obj))
