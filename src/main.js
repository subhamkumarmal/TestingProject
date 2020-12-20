const express=require('express');
const objExp=express();
const hbs=require('hbs');
const path=require('path');
const port=process.env.PORT || 2004;


objExp.set('view engine','.hbs');
const partialsPath=path.join(__dirname,'../partials');
const publicPath=path.join(__dirname,'../public');
objExp.use(express.static(publicPath));
hbs.registerPartials(partialsPath);



objExp.get('/',(req,res)=>{
    res.render('home');
})


objExp.get('/about',(req,res)=>{
    res.render('about');
});

objExp.get('/weather',(req,res)=>{
    res.render('weather');
})

objExp.listen(port,()=>{
    console.log('It is listening...');
})