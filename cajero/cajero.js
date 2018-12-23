class Billete
{
    constructor(v, c)
    {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero()
{
    var t = document.getElementById("dinero");
    var dinero = parseInt(t.value);
    var div = 0;
    var papeles = 0;
    var entregados = [];
    
    for(billete of caja)
    {   
        if(billete.cantidad > 0)
        {
            if(dinero > 0)
            {
                div = Math.floor(dinero / billete.valor);
            }
        
            if(div > billete.cantidad)
            {
                papeles = billete.cantidad;
            }
        
            else if(div <= billete.cantidad)
            {
                papeles = div;
            }
        
            if(papeles > 0)
            {
                entregados.push(new Billete(billete.valor, papeles));
                dinero -= (billete.valor * papeles);
                billete.cantidad -= papeles;
                
                papeles = 0;
                div = 0;
                
                if(dinero == 0)
                {
                    break;
                }
            }
        }
    }
    
    if(dinero > 0)
    {
        resultado.innerHTML = "";
        fallo.innerHTML = "Cantidad no disponible";
        
        for(var b of caja)
        {
            for(var billete of entregados)
            {
                if(b.valor > billete.valor)
                {
                    break;
                }
                
                else if(b.valor == billete.valor)
                {
                    b.cantidad += billete.cantidad;
                }
            }
        }
    }
    
    else
    {
        resultado.innerHTML = "";
        fallo.innerHTML = "";
        
        for(var billete of entregados)
        {
            resultado.innerHTML += billete.cantidad + " billetes de " + billete.valor + "$<br />";
        }
        
    }
}

var caja = [];

caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10));
caja.push(new Billete(20, 5));
caja.push(new Billete(10, 2));
caja.push(new Billete(5, 0));

var resultado = document.getElementById("resultado");
var fallo = document.getElementById("fallo");
var boton = document.getElementById("extraer");
boton.addEventListener("click", entregarDinero);