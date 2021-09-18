var express = require('express');
var cors= require("cors");
var app= express();



 
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.json());



var appRutas = require('./rutas/app');
//var appRUpdate = require('./rutas/update');

app.use('/main',appRutas);
//pp.use('/update',appRUpdate);

//escuchar  peticones
app.listen(3000,()=>{

    console.log('online');
    });