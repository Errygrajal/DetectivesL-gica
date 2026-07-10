let puntaje = 0;
let indice = 0;
let tiempo = 120;
let intervalo;

const preguntas = [

{
pregunta:"¿Cuál es la Ley de Identidad?",
opciones:["A ∪ Ø = A","A ∩ Ø = Ø","A ∪ U = U"],
correcta:0,
explicacion:"La Ley de Identidad establece que la unión de un conjunto con el conjunto vacío es el mismo conjunto."
},

{
pregunta:"¿Cuál es la Ley de Dominación?",
opciones:["A ∩ U = A","A ∪ U = U","A ∪ Ø = A"],
correcta:1,
explicacion:"La Ley de Dominación indica que la unión con el conjunto universal da como resultado el conjunto universal."
},

{
pregunta:"Ley Idempotente:",
opciones:["A ∪ A = A","A ∪ Ø = A","A ∩ B = B ∩ A"],
correcta:0,
explicacion:"Aplicar la misma operación sobre el mismo conjunto no cambia el resultado."
},

{
pregunta:"Ley Conmutativa:",
opciones:["A ∪ B = B ∪ A","A ∪ B = A","A ∩ B = A"],
correcta:0,
explicacion:"El orden de los conjuntos no altera el resultado."
},

{
pregunta:"Ley Asociativa:",
opciones:["(A ∪ B) ∪ C = A ∪ (B ∪ C)","A ∪ B = B ∪ A","A ∩ Ø = Ø"],
correcta:0,
explicacion:"La agrupación de conjuntos no modifica el resultado."
},

{
pregunta:"¿Qué ley representa A ∩ U = A?",
opciones:["Identidad","Dominación","Complemento"],
correcta:0,
explicacion:"La intersección con el conjunto universal devuelve el mismo conjunto."
},

{
pregunta:"¿Cuál es el complemento de A ∪ B?",
opciones:["A' ∩ B'","A' ∪ B'","A ∩ B"],
correcta:0,
explicacion:"Es la primera Ley de De Morgan."
},

{
pregunta:"¿Cuál es el complemento de A ∩ B?",
opciones:["A' ∪ B'","A' ∩ B'","A ∪ B"],
correcta:0,
explicacion:"Es la segunda Ley de De Morgan."
},

{
pregunta:"¿Qué regla de inferencia es: P → Q, ¬Q, por lo tanto ¬P?",
opciones:["Modus Tollens","Modus Ponens","Adición"],
correcta:0,
explicacion:"Modus Tollens niega el antecedente cuando se niega la consecuencia."
},

{
pregunta:"¿Qué regla es: P, por lo tanto P ∨ Q?",
opciones:["Adición","Simplificación","Modus Ponens"],
correcta:0,
explicacion:"La regla de Adición permite agregar una disyunción."
},

{
pregunta:"¿Qué regla es: P ∧ Q, por lo tanto P?",
opciones:["Simplificación","Adición","Modus Tollens"],
correcta:0,
explicacion:"La Simplificación permite obtener una parte de una conjunción."
},

{
pregunta:"¿Qué regla es: P→Q, Q→R, por lo tanto P→R?",
opciones:["Silogismo Hipotético","Silogismo Disyuntivo","Modus Ponens"],
correcta:0,
explicacion:"Permite encadenar implicaciones."
},

{
pregunta:"¿Qué regla es: P∨Q, ¬P, por lo tanto Q?",
opciones:["Silogismo Disyuntivo","Modus Tollens","Adición"],
correcta:0,
explicacion:"Al descartar una opción en una disyunción, queda la otra."
},

{
pregunta:"¿Cuál es el resultado de A ∩ Ø?",
opciones:["Ø","A","U"],
correcta:0,
explicacion:"La intersección con el conjunto vacío siempre es vacía."
},

{
pregunta:"¿Cuál es el resultado de A ∪ U?",
opciones:["U","A","Ø"],
correcta:0,
explicacion:"La unión con el conjunto universal siempre da el universal."
},

{
pregunta:"¿Qué ley representa A ∪ A = A?",
opciones:["Idempotente","Conmutativa","Asociativa"],
correcta:0,
explicacion:"Un conjunto unido consigo mismo no cambia."
},

{
pregunta:"¿Qué ley representa A ∩ A = A?",
opciones:["Idempotente","Complemento","Dominación"],
correcta:0,
explicacion:"La intersección consigo mismo mantiene el conjunto."
},

{
pregunta:"¿Cuál es el complemento del complemento de A?",
opciones:["A","A'","Ø"],
correcta:0,
explicacion:"El doble complemento devuelve el conjunto original."
},

{
pregunta:"¿Qué ley representa A ∪ A' = U?",
opciones:["Complemento","Conmutativa","Asociativa"],
correcta:0,
explicacion:"La unión de un conjunto con su complemento produce el universal."
},

{
pregunta:"¿Qué ley representa A ∩ A' = Ø?",
opciones:["Complemento","Dominación","Identidad"],
correcta:0,
explicacion:"Un conjunto y su complemento no comparten elementos."
}

];

function iniciarJuego(){

let nombre = document.getElementById("nombre").value.trim();

if(nombre === ""){
alert("Ingrese su nombre");
return;
}

document.getElementById("inicio").style.display = "none";
document.getElementById("juego").style.display = "block";

document.getElementById("temporizador").innerHTML =
"⏰ Tiempo: " + tiempo;

mostrarPregunta();

intervalo = setInterval(reloj,1000);
}

function reloj(){

tiempo--;

document.getElementById("temporizador").innerHTML =
"⏰ Tiempo: " + tiempo;

if(tiempo <= 0){
finalizar();
}
}

function mostrarPregunta(){

let p = preguntas[indice];

document.getElementById("contadorPreguntas").innerHTML =
"Pregunta " + (indice + 1) + " de " + preguntas.length;

document.getElementById("pregunta").innerHTML =
p.pregunta;

let opcionesHTML = "";

for(let i = 0; i < p.opciones.length; i++){

opcionesHTML += `
<button onclick="verificar(${i})">
${p.opciones[i]}
</button>
`;
}

document.getElementById("opciones").innerHTML =
opcionesHTML;

document.getElementById("barra").max =
preguntas.length;

document.getElementById("barra").value =
indice;
}

function verificar(opcion){

let preguntaActual = preguntas[indice];

if(opcion === preguntaActual.correcta){

puntaje += 10;

alert(
"✅ Correcto\n\n" +
preguntaActual.explicacion
);

}else{

alert(
"❌ Incorrecto\n\n" +
preguntaActual.explicacion
);
}

document.getElementById("puntaje").innerHTML =
puntaje;

indice++;

if(indice >= preguntas.length){
finalizar();
}else{
mostrarPregunta();
}
}

function finalizar(){

clearInterval(intervalo);

document.getElementById("juego").style.display =
"none";

document.getElementById("final").style.display =
"block";

document.getElementById("resultado").innerHTML =
"Puntaje Final: " + puntaje + " puntos";

let medalla = "";

if(puntaje >= 180){
medalla = "🥇 Detective Maestro";
}
else if(puntaje >= 140){
medalla = "🥈 Detective Experto";
}
else if(puntaje >= 100){
medalla = "🥉 Detective Junior";
}
else{
medalla = "📚 Sigue practicando";
}

document.getElementById("medalla").innerHTML =
medalla;

guardarRanking();

mostrarRanking();
}

function guardarRanking(){

let nombre =
document.getElementById("nombre").value;

let ranking =
JSON.parse(localStorage.getItem("ranking")) || [];

ranking.push({
nombre:nombre,
puntaje:puntaje
});

ranking.sort((a,b)=>b.puntaje-a.puntaje);

ranking = ranking.slice(0,3);

localStorage.setItem(
"ranking",
JSON.stringify(ranking)
);
}

function mostrarRanking(){

let ranking =
JSON.parse(localStorage.getItem("ranking")) || [];

let html = "";

for(let i = 0; i < ranking.length; i++){

let medalla = "🥉";

if(i === 0){
medalla = "🥇";
}
else if(i === 1){
medalla = "🥈";
}

html += `
<p>
${medalla} ${i+1}° Lugar:
<b>${ranking[i].nombre}</b>
- ${ranking[i].puntaje} puntos
</p>
`;
}

document.getElementById("ranking").innerHTML =
html;
}