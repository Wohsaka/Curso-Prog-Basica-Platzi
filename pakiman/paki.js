var imagenes = [];
imagenes["Pika"] = "pollo.png";
imagenes["Toci"] = "cerdo.png";
imagenes["Vaca"] = "vaca.png";

var coleccion = [];
coleccion.push(new Pakiman("Pika", 350, 120));
coleccion.push(new Pakiman("Toci", 170, 150));
coleccion.push(new Pakiman("Vaca", 200, 200));

for(var i of coleccion)
{
    i.mostrar();
}

for(var x in imagenes)
{
    console.log(x);
}