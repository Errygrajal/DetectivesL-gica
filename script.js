let puntaje = 0;
let indice = 0;
let tiempo = 60;
let intervalo;

const preguntas = [

{
pregunta:"Ley de De Morgan:",
opciones:[
"(A∪B)' = A'∩B'",
"(A∩B)' = A∩B",
"A∪B=A∩B"
],
correcta:0
},

{
pregunta:"¿Qué regla es? Si P→Q y P entonces Q",
opciones:[
"Modus Ponens",
"Modus Tollens",
"Adición"
],
correcta:0
},

{
pregunta:"Ley Distributiva",
opciones:[
"A∩(B∪C)=(A∩B)∪(A∩C)",
"A∪B=A",
"A∩A=Ø"
],
correcta:0
},

{
pregunta:"Si P→Q, ¬Q entonces ¬P",
opciones:[
"Modus Tollens",
"Adición",
"Simplificación"
],
correcta:0
}

];

function iniciarJuego(){

let nombre =
document.getElementById("nombre").value;

if(nombre==""){
alert("Ingrese un nombre");
return;
}

document.getElementById("inicio")
.style.display="none";

document.getElementById("juego")
.style.display="block";

mostrarPregunta();

intervalo=setInterval(reloj,1000);

}

function reloj(){

tiempo--;

document.getElementById("temporizador")
.innerHTML="⏰ Tiempo: "+tiempo;

if(tiempo<=0){

finalizar();

}

}

function mostrarPregunta(){

let p = preguntas[indice];

document.getElementById("pregunta")
.innerHTML=p.pregunta;

let opcionesHTML="";

for(let i=0;i<p.opciones.length;i++){

opcionesHTML +=

`<button onclick="verificar(${i})">
${p.opciones[i]}
</button>`;

}

document.getElementById("opciones")
.innerHTML=opcionesHTML;

document.getElementById("barra")
.value=indice;

}

function verificar(opcion){

if(opcion==preguntas[indice].correcta){

puntaje += 10;

alert("Correcto");

}else{

alert("Incorrecto");

}

document.getElementById("puntaje")
.innerHTML=puntaje;

indice++;

if(indice>=preguntas.length){

finalizar();

}else{

mostrarPregunta();

}

}

function finalizar(){

clearInterval(intervalo);

document.getElementById("juego")
.style.display="none";

document.getElementById("final")
.style.display="block";

document.getElementById("resultado")
.innerHTML=
"Puntaje Final: "+puntaje;

guardarRanking();

}

function guardarRanking(){

let nombre=
document.getElementById("nombre").value;

let ranking=
JSON.parse(localStorage.getItem("ranking"))
|| [];

ranking.push({

nombre:nombre,
puntaje:puntaje

});

localStorage.setItem(
"ranking",
JSON.stringify(ranking)
);

}