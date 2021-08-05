const express=require('express');
const app=express();
const hbs=require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');


app.get('/',(req,res)=>{
    res.render('home',{
        nombre1: 'Karla'
    });
});


app.listen(port,()=>{
    console.log(`Escuchando peticiones en el puerto ${port}`);
})