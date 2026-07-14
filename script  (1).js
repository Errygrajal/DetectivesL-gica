let puntaje = 0;
let indice = 0;
let tiempo = 180;
let intervalo;

const preguntas = [
    
{
    expresion: "Paso: (A ∪ B)' \n¿Cuál ley nos permite transformarlo en A' ∩ B'?",
    opciones: [
        "Leyes de De Morgan",
        "Ley Distributiva",
        "Ley de Idempotencia"
    ],
    correcta: 0,
    explicacion: "Las Leyes de De Morgan establecen que el complemento de la unión es la intersección de los complementos.",
    retroalimentacion: "La Ley de De Morgan invierte la unión para convertirla en una intersección."
},

{
    expresion: "Paso: A ∩ (B ∪ C)\n¿Qué ley aplicamos para obtener (A ∩ B) ∪ (A ∩ C)?",
    opciones: [
        "Ley Asociativa",
        "Ley de Absorción",
        "Ley Distributiva"
    ],
    correcta: 2,
    explicacion: "La intersección se distribuye sobre la unión.",
    retroalimentacion: "A∩(B∪C)=(A∩B)∪(A∩C)."
},

{
    expresion: "Paso 1: (A ∪ (A ∩ B)\n¿Qué ley aplicamos para obtener  A",
    opciones: [
        "Ley De Morgan",
        "Ley De Absorción",
        "Ley Distributiva"
    ],
    correcta: 2,
    explicacion: "El discriminante es negativo, por lo que no existen soluciones reales.",
    retroalimentacion: "No hay números reales que satisfagan la ecuación."
},

{
    expresion: "¿Qué ley lógica indica que P ∨ P ≡ P?",
    opciones: [
        "Ley Asociativa",
        "Ley De Idempotenpotencia",
        "Ley De  Absorción"
    ],
    correcta: 1,
    explicacion: "Genial La conectiva lógica 'O' tiene una sola condición para ser verdadera: al menos una de las dos partes tiene que ser verdadera",
    retroalimentacion: "¡Ups! la ley de idempotencia simplemente dice que repetir la misma información no agrega nada nuevo. El valor de verdad sigue siendo exactamente el mismo..."
},

{
    expresion: "Premisas:\n1. p → q\n2. p\n¿Qué regla de inferencia nos permite concluir q?",
    opciones: [
        "Modus Tollens",
        "Modus Ponens",
        "Silogismo Disyuntivo"
    ],
    correcta: 1,
    explicacion: "Al afirmar el antecedente se concluye el consecuente.",
    retroalimentacion: "Regla Modus Ponens."
},

{
    expresion: "Premisas:\n1. p → q\n2. ¬q\n¿Qué regla nos permite concluir ¬p?",
    opciones: [
        "Modus Tollens",
        "Doble Negación",
        "Simplificación"
    ],
    correcta: 0,
    explicacion: "Al negar el consecuente se niega el antecedente.",
    retroalimentacion: "Regla Modus Tollens."
},

{
    expresion: "Premisas:\n1. p ∧ q\n¿Qué regla permite concluir únicamente p?",
    opciones: [
        "Adición",
        "Simplificación",
        "Conjunción"
    ],
    correcta: 1,
    explicacion: "Si una conjunción es verdadera, cada parte también lo es.",
    retroalimentacion: "Regla de Simplificación."
},

{
    expresion: "Premisas:\n1. p ∨ q\n2. ¬p\n¿Qué regla permite concluir q?",
    opciones: [
        "Silogismo Hipotético",
        "Dilema Constructivo",
        "Silogismo Disyuntivo"
    ],
    correcta: 2,
    explicacion: "Si una opción se descarta, queda la otra.",
    retroalimentacion: "Regla Silogismo Disyuntivo."
},

{
    expresion: `Argumento:
Si sale cara, yo gano.
Si sale cruz, tú no ganas.
Sale cruz.
...
<br>1. cara → gano Premisa
<br>2. cruz → ¬ganas Premisa
<br>3. cruz Premisa
<br>4. cara ↔ ¬cruz Premisa
<br>5. ganas ↔ ¬gano Premisa
<br>6. ¬ganas
<br>7. ¬gano → ganas
<br>8. ¬¬gano
<br>9. gano

<br>Determine la regla utilizada para la conclusión 9: gano`,
    opciones: [
        "Modus Tollens de 6 y 7",
        "Doble Negación de 8",
        "Modus Ponens de 4 y 2",
        "Modus Tollens de 1 y 2"
    ],
    correcta: 1,
    explicacion: "La Doble Negación establece que ¬¬P equivale a P.",
    retroalimentacion: "La conclusión 'gano' se obtiene aplicando Doble Negación."
},

{
    expresion: "Premisas:\nHoy es domingo → Mañana será lunes\nHoy es domingo\n¿Qué regla permite concluir 'Mañana será lunes'?",
    opciones: [
        "Modus Tollens",
        "Modus Ponens",
        "Silogismo Disyuntivo",
        "Eliminación de equivalencia"
    ],
    correcta: 1,
    explicacion: "Al afirmar el antecedente se afirma el consecuente.",
    retroalimentacion: "La respuesta correcta es Modus Ponens."
}

];

function iniciarJuego(){

let nombre =
document.getElementById("nombre").value;

if(nombre==""){

alert("Digite su nombre");

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
.innerHTML=
"⏰ Tiempo: "+tiempo;
if(tiempo<=0){
finalizar();
}
}

function mostrarPregunta(){
let p =
preguntas[indice];

document.getElementById("pregunta")
.innerHTML=
p.expresion;

let html="";

for(let i=0;i<p.opciones.length;i++){


html +=

`

<button onclick="verificar(${i})">

${p.opciones[i]}

</button>

`;

}

document.getElementById("opciones")
.innerHTML=html;

document.getElementById("barra")
.value=indice;
}

function verificar(respuesta){
    let p = preguntas[indice];

    // Pausamos el reloj para que lean la respuesta tranquilos
    clearInterval(intervalo); 

    // Buscamos los elementos del cuadro flotante
    let modal = document.getElementById("miModal");
    let titulo = document.getElementById("modalTitulo");
    let texto = document.getElementById("modalTexto");

    if(respuesta == p.correcta){
        puntaje += 10;
        titulo.innerHTML = "🎉 ¡Excelente!";
        titulo.style.color = "#4CAF50"; // Verde para acierto
        texto.innerHTML = p.explicacion;
    }
    else {
        titulo.innerHTML = "❌ ¡Incorrecto!";
        titulo.style.color = "#F44336"; // Rojo para error
        texto.innerHTML = p.explicacion;
    }

    // Mostramos el cuadro flotante usando flexbox
    modal.style.display = "flex";

    // Actualizamos el puntaje en la pantalla de fondo
    document.getElementById("puntaje").innerHTML = puntaje;
}

function cerrarModal(){
    // Ocultamos el cuadro flotante
    document.getElementById("miModal").style.display = "none";
    
    // Pasamos a la siguiente pregunta
    indice++;

    if(indice >= preguntas.length){
        finalizar();
    } else {
        // Volvemos a activar el reloj y mostramos la siguiente pregunta
        intervalo = setInterval(reloj, 1000); 
        mostrarPregunta();
    }
}


function finalizar(){

    clearInterval(intervalo);

    document.getElementById("juego").style.display = "none";
    document.getElementById("final").style.display = "block";

    document.getElementById("resultado").innerHTML =
    "Puntaje Final: " + puntaje + " puntos";

    let mensaje = "";

    if(puntaje >= 90){
        mensaje = "🏆 ¡Excelente trabajo! Has demostrado un gran dominio de la lógica matemática.";
    }
    else if(puntaje >= 70){
        mensaje = "👏 ¡Muy bien! Tienes buenos conocimientos de lógica y conjuntos.";
    }
    else if(puntaje >= 50){
        mensaje = "📚 Buen intento. Sigue practicando para mejorar tus habilidades lógicas.";
    }
    else{
        mensaje = "💡 Has finalizado el juego. Continúa estudiando para convertirte en un verdadero Detective de la Lógica.";
    }

    document.getElementById("medalla").innerHTML = mensaje;
}