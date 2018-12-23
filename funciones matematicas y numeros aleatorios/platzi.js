function getRandom(max, min)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function dibujar()
{
    if(fondo.loadOK)
    {
        papel.drawImage(fondo.image, 0, 0);
    }
    
    if(vaca.loadOK)
    {
        for(var i = 0; i < cantVacas; ++i)
        {
            x = getRandom(0, 7);
            y = getRandom(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(vaca.image, x, y);
        }
    }
    
    if(cerdo.loadOK)
    {
        for(var i = 0; i < cantCerdos; ++i)
        {
            x = getRandom(0, 7);
            y = getRandom(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(cerdo.image, x, y);
        }
    }
    
    if(pollo.loadOK)
    {
        for(var i = 0; i < cantPollos; ++i)
        {
            x = getRandom(0, 7);
            y = getRandom(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(pollo.image, x, y);
        }
    }
    
    if(mugi.loadOK)
    {
        papel.drawImage(mugi.image, xMugi, yMugi, 80, 80);
    }
}

function cargarFondo()
{
    fondo.loadOK = true;
    dibujar();
}

function cargarVaca()
{
    vaca.loadOK = true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.loadOK = true;
    dibujar();
}

function cargarPollo()
{
    pollo.loadOK = true;
    dibujar();
}

function cargarMugi()
{
    mugi.loadOK = true;
    dibujar();
}

function moverMugi(ev)
{
    if(fondo.loadOK)
    {
        papel.drawImage(fondo.image, 0, 0);
    }
    
    if(vaca.loadOK)
    {
        for(var i = 0; i < cantVacas; ++i)
        {
            x = getRandom(0, 7);
            y = getRandom(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(vaca.image, x, y);
        }
    }
    
    if(cerdo.loadOK)
    {
        for(var i = 0; i < cantCerdos; ++i)
        {
            x = getRandom(0, 7);
            y = getRandom(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(cerdo.image, x, y);
        }
    }
    
    if(pollo.loadOK)
    {
        for(var i = 0; i < cantPollos; ++i)
        {
            x = getRandom(0, 7);
            y = getRandom(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(pollo.image, x, y);
        }
    }
    
    if(mugi.loadOK)
    {
    
        var desplazamiento = 5;
        switch(ev.keyCode)
        {
            case teclas.UP:
                            papel.drawImage(mugi.image, xMugi, yMugi - desplazamiento, 80, 80);
                            yMugi -= desplazamiento;
                            break;
                
            case teclas.DOWN:
                            papel.drawImage(mugi.image, xMugi, yMugi + desplazamiento, 80, 80);
                            yMugi += desplazamiento;
                            break;
                
            case teclas.LEFT:
                            papel.drawImage(mugi.image, xMugi - desplazamiento, yMugi, 80, 80);
                            xMugi -= desplazamiento;
                            break;
                
            case teclas.RIGHT:
                            papel.drawImage(mugi.image, xMugi + desplazamiento, yMugi, 80, 80);
                            xMugi += desplazamiento;
                            break;
        }
    }
}

var fondo = 
{
    src : "./img/tile.png",
    loadOK : false
};
fondo.image = new Image;
fondo.image.src = fondo.src;
fondo.image.addEventListener("load", cargarFondo);

var vaca =
{
    src : "./img/vaca.png",
    loadOK : false
};
vaca.image = new Image;
vaca.image.src = vaca.src;
vaca.image.addEventListener("load", cargarVaca);

var cerdo =
{
    src : "./img/cerdo.png",
    loadOK : false
};
cerdo.image = new Image;
cerdo.image.src = cerdo.src;
cerdo.image.addEventListener("load", cargarCerdo);

var pollo =
{
    src : "./img/pollo.png",
    loadOK : false
};
pollo.image = new Image;
pollo.image.src = pollo.src;
pollo.image.addEventListener("load", cargarPollo);

var mugi =
{
    src : "C:/Users/raule/Pictures/Weeb Things/memes de mugi/hail mugi2.png",
    loadOK : false
};
mugi.image = new Image;
mugi.image.src = mugi.src;
mugi.image.width = 80;
mugi.image.height = 80;
mugi.image.addEventListener("load", cargarMugi);

var teclas =
{
    UP : 38,
    DOWN : 40,
    LEFT : 37,
    RIGHT : 39
};

var vp = document.getElementById("villaplatzi");
document.addEventListener("keydown", moverMugi);
var papel = vp.getContext("2d");

var cantVacas = getRandom(2, 7);
var cantCerdos = getRandom(2, 7);
var cantPollos = getRandom(2, 7);

var xMugi = 80;
var yMugi = 80;