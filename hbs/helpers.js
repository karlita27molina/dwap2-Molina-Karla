const fs = require('fs');
const hbs = require('hbs');
const { request } = require('http');
let rawdata = fs.readFileSync('public/assets/data/productos.json');
let productos = JSON.parse(rawdata);
/*for (var i=0; i<JSON.parse.length; i++){
    hbs.registerHelper('producto', (text)=>{        
        return productos[i].nombre;
});}*/
console.log(productos[1].nombre);
hbs.registerHelper('producto', (text)=>{
    return productos[0].nombre;
});
hbs.registerHelper('imagen', (text)=>{
    return productos[0].imagen;
});
hbs.registerHelper('precio', (text)=>{
    return productos[0].precio;
});

hbs.registerHelper('producto1', (text)=>{
    return productos[1].nombre;
});
hbs.registerHelper('imagen1', (text)=>{
    return productos[1].imagen;
});
hbs.registerHelper('precio1', (text)=>{
    return productos[1].precio;
});

hbs.registerHelper('producto2', (text)=>{
    return productos[2].nombre;
});
hbs.registerHelper('imagen2', (text)=>{
    return productos[2].imagen;
});
hbs.registerHelper('precio2', (text)=>{
    return productos[2].precio;
});

hbs.registerHelper('producto3', (text)=>{
    return productos[3].nombre;
});
hbs.registerHelper('imagen3', (text)=>{
    return productos[3].imagen;
});
hbs.registerHelper('precio3', (text)=>{
    return productos[3].precio;
});

hbs.registerHelper('producto4', (text)=>{
    return productos[4].nombre;
});
hbs.registerHelper('imagen4', (text)=>{
    return productos[4].imagen;
});
hbs.registerHelper('precio4', (text)=>{
    return productos[4].precio;
});

hbs.registerHelper('producto5', (text)=>{
    return productos[5].nombre;
});
hbs.registerHelper('imagen5', (text)=>{
    return productos[5].imagen;
});
hbs.registerHelper('precio5', (text)=>{
    return productos[5].precio;
});