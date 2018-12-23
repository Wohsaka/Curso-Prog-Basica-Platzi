var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39
};

document.addEventListener("keydown", dibujarTeclado);
document.addEventListener("mousedown", clickDown);
document.addEventListener("mouseup", clickUp);
document.addEventListener("mousemove", dibujarConMouse);
var c = document.getElementsByName("mouse");
var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;
var clickEstate = 0;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "#FAA";
  var movimiento = 5;
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
    break;
  }
}

function clickDown(evento)
{
    clickEstate = 1;
    x = evento.layerX;
    y = evento.layerY;
}

function clickUp(evento)
{
    clickEstate = 0;
    x = evento.layerX;
    y = evento.layerY;
}

function dibujarConMouse(evento)
{
    var col = "#18c5c9";
    
    if(clickEstate == 1)
    {
        dibujarLinea(col, x, y, evento.layerX, evento.layerY, papel);
        x = evento.layerX;
        y = evento.layerY;
    }
}