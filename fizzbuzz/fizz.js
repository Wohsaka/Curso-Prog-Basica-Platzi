for(var i = 1; i <= 100; ++i)
{
    //document.write("hola");
    if(i % 3 == 0 && i % 5 == 0)
    {
        document.write("fizzbuzz");
    }
    else if(i % 3 == 0)
    {
        document.write("fizz");
    }
    else if(i % 5 == 0)
    {
        document.write("buzz");
    }
    else
    {
        document.write(i);
    }
    document.write("<br />");
    
}