function suma(){
    var A=0;
    var B=0;
    var suma=0;
    alert("PORFAVOR INGRESE EL PRIMER VALOR A SUMAR");
    A=parseInt(prompt(""));
    alert("PORFAVOR INGRESE EL SEGUNDO VALOSR A SUMAR");
    B=parseInt(prompt(""));
    suma=A+B;
    alert("EL RESULTADO DE LA SUMA ES="+suma);
    
}
function opBasica(){
    var A=0;
    var B=0;
    var suma=0; 
    var resta=0;
    var multiplicacion=0;
    var division=0;
    alert("PORFAVOR INGRESE EL PRIMER VALOR A INGRESAR");
    A=parseInt(prompt(""));
    alert("PORFAVOR INGRESE EL SEGUNDO VALOR A IMGRESAR");
    B=parseInt(prompt(""));
    suma=A+B;
    resta=A-B;
    multiplicacion=A*B;
    division=A/B;
    alert("EL RESULTADO DE LA SUMA ES="+suma);
    alert("EL RESULTADO DE LA RESTA ES="+resta);
    alert("EL RESULTADO DE LA MULTIPLICACION ES="+multiplicacion);
    alert("EL RESULTADO DE LA DIVISION ES="+division);


}
function promedio(){
    var nota1=0;
    var nota2=0;
    var nota3=0;
    var nota4=0;
    var nota5=0;
    var nota6=0;
    var nota7=0;
    var promedio=0;
    nota1=parseInt(prompt("PORFAVOR INGRESE LA PRIMERA NOTA",""));
    nota2=parseInt(prompt("PORFAVOR INGRESE LA SEGUNDA NOTA",""));
    nota3=parseInt(prompt("PORFAVOR INGRESE LA TERCERA NOTA",""));
    nota4=parseInt(prompt("PORFAVOR INGRESE LA CUARTA NOTA",""));
    nota5=parseInt(prompt("PORFAVOR INGRESE LA QUINTA NOTA",""));
    nota6=parseInt(prompt("PORFAVOR INGRESE LA SEXTA NOTA",""));
    nota7=parseInt(prompt("PORFAVOR INGRESE LA SÉPTIMA NOTA",""));
    promedio=(nota1+nota2+nota3+nota4+nota5+nota6+nota7)/7;
    alert("el promedio es="+promedio)
    if(promedio>6.1){
        alert("aprobó");
    }
    else{
        alert("reprobo")
    }
}

function inversion(){
    var capital=0;
    var ganancia=0;
    var año=0;
    var total=0;
    capital=parseInt(prompt("PORFAVOR INGRESE EL CAPITAL",""));
    año=parseInt(prompt("PORFAVOR IGRESE EL AÑO",""));
    ganancia=(capital*0,204)*año;
    total=capital+ganancia;
    alert("LA GANANCIA ES="+ ganancia);
    alert("RECIBIO UN TOTAL DE="+ total);
}
function mayor(){
    var a=0;
    var b=0;
    a=parseInt(prompt("DIGITE EL PRIMER VALOR",""));
    b=parseInt(prompt("DIGITE EL SEGUNDO VALOR",""));
    if(a==b){
        alert("los numeros son iguales, por favor digite otros digitos");
    }
    else {

         if(a>b){
            alert("El mayor es,"+a);
         }
         else{
            alert("El mayor es,"+b);
         }
    }
    }
    function menor(){
        var a=0;
        var b=0;
        var c=0;
      
        a=parseInt(prompt("DIGITE EL PRIMER VALOR",""));
        b=parseInt(prompt("DIGITE EL SEGUNDO VALOR",""));
        c=parseInt(prompt("DIGITE EL TERCER VALOR",""));
        if(a!==b  && a!==c && b!==c ){
           if(a<b ){
            if(a<c){
                alert("El menor es,"+a);

           }

        }
        else if (b<c){
            if(b<c){
                alert("El menor es,"+b);

            }
           
           }
           
           else{
            alert("El menor es,"+c);

        }
    }
    else{
        alert("los numeros son iguales, por favor digite otros valores");
    }
        
    }
    function triangulo(){
           var base=0;
           var altura=0;
           var area=0;
           base=parseInt(prompt("DIGITE LA BASE DEL TRIÁNGULO",""));
           altura=parseInt(prompt("DIGITE LA ALTURA DEL TRIÁNGULO",""));    
           area=(base*altura)/2;
           alert("El área del triángulo es "+area);

        

    }
     function añoDeNacimiento(){
        var edad=0;
        var añoActual=0;
        var AñoDeNacimiento=0;
        var meses="";
        edad=parseInt(prompt("PORFAVOR DIGITE SU EDAD"))
        añoActual=parseInt(prompt("PORFAVOR DIGITE SU AÑO ACTUAL",""));
        edad=((añoActual-edad)-1);
        alert("SU AÑO DE NACIMIENTO ES "+edad);
        
        


         
    
    
     }
     function circulo(){
        var figura= document.getElementById("figura");
        figura.classList.toggle("circulo");

     }
     function rectangulo(){
        var figura= document.getElementById("figura");
        figura.classList.toggle("rectangulo");

     }
     function rombo(){
        var figura= document.getElementById("figura");
        figura.classList.toggle("rombo");

     }
     function gif(){
        var figura= document.getElementById("figura");
        figura.classList.toggle("gif");

     }
     function izquierda(){
        var figura= document.getElementById("figura");
        figura.classList.toggle("izquierda");

     }
     function derecha(){
        var figura= document.getElementById("figura");
        figura.classList.toggle("derecha");

     }
     function arriba(){
        var figura= document.getElementById("figura");
        figura.classList.toggle("arriba");

     }
     function abajo(){
        var figura= document.getElementById("figura");
        figura.classList.toggle("abajo");

     }
     function diagonal(){
        var figura= document.getElementById("figura");
        figura.classList.toggle("diagonal");

     }
    