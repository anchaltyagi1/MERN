const express = require('express')
const app =express()

app.get('/products',(req,res)=>{
    res.send('<h1>Hello World Get</h1>')

})
app.post('/products',(req,res)=>{
    res.send('<h1>Hello World post</h1>')

})
app.patch('/products',(req,res)=>{
    res.send('<h1>Hello World patch </h1>')

})
app.delete('/products',(req,res)=>{
    res.send('<h1>Hello World delete</h1>')

})


app.listen(1800)