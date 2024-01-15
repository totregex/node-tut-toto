const express=require('express')
const app=express()
const {products}=require('./data')
app.get('/',(req,res)=>{
    console.log('Got request')
    res.json(products)
})
app.listen(5000,()=>{
    console.log(`I'm listening on port 5000`)
})