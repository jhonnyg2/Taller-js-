    // ejercicio 1
function ejer1() {
        var bodym = document.getElementById("tabla1");
        var tabla   = document.createElement("table");
        var tblBody = document.createElement("tbody");
      
        for (var i = 1; i <= 50; i++) {
          var hilera = document.createElement("tr");
      
          for (var j = 0; j < 1; j++) {
            var celda = document.createElement("td");
            var celda2 = document.createElement("td");
            var textoCelda = document.createTextNode(`El cuadrado de ${i} es ` );
            var textoCelda2 = document.createTextNode(` ${i * i}` );
            celda.appendChild(textoCelda);
            celda2.appendChild(textoCelda2);
            hilera.appendChild(celda);
            hilera.appendChild(celda2);
          }
          tblBody.appendChild(hilera);
        }
      
        tabla.appendChild(tblBody);
        bodym.appendChild(tabla);
        tabla.setAttribute("border", "2");
}
function lim1(){
    document.getElementById('tabla1').innerHTML="";
}
    //ejercicio 2
function ejer2() {
    var cua = document.getElementById("par");
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
    
    var fila = document.createElement("tr");
    var celdath = document.createElement("th");
    txth = document.createTextNode("Números Impares");
    celdath.appendChild(txth);
    fila.appendChild(celdath)
    celdath.appendChild(txth);
    fila.appendChild(celdath);
    tblBody.appendChild(fila);
    
    
    for (let o = 1; o <=100 ; o+=2) {
        
    for (let i = 0; i <1; i++) {
        var fila = document.createElement("tr");
        var celdatd = document.createElement("td");
        
        var textoCelda=document.createTextNode(o);
        celdatd.appendChild(textoCelda);
        celdath.appendChild(txth);
        fila.appendChild(celdatd);
        tblBody.appendChild(fila);
    }
    }
    for (let p = 102; p <=200 ; p+=2) {
        var fila2 = document.createElement("tr");
        var celdatd2 = document.createElement("td");
        var textoCelda2=document.createTextNode(p);
        celdatd2.appendChild(textoCelda2);
        fila2.appendChild(celdatd2);
        tblBody.appendChild(fila2);
    }
    tabla.appendChild(tblBody);
    cua.appendChild(tabla);
    
    
}
function lim2(){
    document.getElementById("par").innerHTML="";
}
    // ejercicio 3
function ejer3() {
    const x=parseInt(prompt("digite el numero natural"))
    document.write("Numeros pares entre el numero ",x," y 2 <br>")
    for (let i=x; i>=1;i--){
       if ((i %2===0) && (i<=x)) {
            document.write(i+"<br>")
       }
       else if(x<=2){
        alert("El numero ingresado es menor a 2, por favor digite un numero mayor ")
       }    
    }
}
    // ejercicio 4
function ejer4() {

    let c=prompt("Digite la cantidad de numero a ingresar")
    while (c>0){
        let num=prompt("Digite el numero ",i++)
        c++;
        document.write(num)
    }
}
    // ejercicio 5
function ejer5() {
    
}
    // ejercicio 6
function ejer6() {
    
}
    // ejercicio 7
function ejer7() {
    
}
    // ejercicio 8
function ejer8() {
    var des= parent(prompt("Digite el numero decimal, que desea convertir"));
    var bin="";
    while(des >0){
        din=(des % 2)+bin;
        des=Math.floor(des/2);
    }
    var res=document.write("El resultado es: <br>");
    document.write("El numero binario es: ", bin);
}
    // ejercicio 9
function ejer9() {

    
}
    // ejercicio 10 y 11
function ejer10() {
    var arrayU = new Array(3);
    var arrayA= new Array(3);

arrayU[0] = prompt('Ingresa el 1er numero:','');
arrayU[1] = prompt('Ingresa el 2do numero:','');
arrayU[2] = prompt('Ingresa el 3er numero:','');
arrayA[0] = prompt('Ingresa el 1er numero:','');
arrayA[1] = prompt('Ingresa el 2do numero:','');
arrayA[2] = prompt('Ingresa el 3er numero:','');
var u=arrayU[0] * arrayU[1] * arrayU[2];
var a=arrayA[0] * arrayA[1] * arrayA[2];
var x=u*a;
var xx=x*x
document.write("La multiplicacion del primer array es: ",u,"<br>");
document.write("La multiplicacion del segundo array es: ",a,"<br>");
document.write("La multiplicacion es: ",x);
document.write("<br>"+"El producto es: ",xx);
}
    // ejercicio 12
function ejer12() {
    var a=25000000000;//poblacion inicial A
    var b=18900000000;//poblacion inicial b
    var x=(a*2)/100;// 2% de a
    var e=(b*3)/100;//3% de b
    var k=2022;
    document.getElementById("anno").innerHTML="ejer12()";
}
    // ejercicio 13
function ejer13() {
    
}
    // ejercicio 14
function ejer14() {
    
}
    // ejercicio 15
function ejer15() {
    
}
    // ejercicio 16
function ejer16() {
    
}
    // ejercicio 17
function ejer17() {
    
}
    // ejercicio 18
function ejer18() {
    
}
    // ejercicio 19
function ejer19() {
    
}
    // ejercicio 20
function ejer20() {
    
}
    // ejercicio 21
function ejer21() {
    
}
    // ejercicio 22
function ejer22() {
    
}
    // ejercicio 23
function ejer23() {
    
}
    // ejercicio 24
function ejer24() {
    
}
    // ejercicio 25
function ejer25() {
    
}