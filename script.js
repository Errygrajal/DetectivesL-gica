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
    expresion: "Clasifica el siguiente conjunto:\nA = { x ∈ ℝ / x² + x + 1 = 0 }",
    opciones: [
        "Conjunto Vacío",
        "Conjunto No Vacío",
        "Conjunto Universo"
    ],
    correcta: 0,
    explicacion: "El discriminante es negativo, por lo que no existen soluciones reales.",
    retroalimentacion: "No hay números reales que satisfagan la ecuación."
},

{
    expresion: "Describa por extensión el siguiente conjunto:\n{ x / x ∈ ℚ , x² = 3 }",
    opciones: [
        "{2}",
        "∅",
        "{4,5,6,7}"
    ],
    correcta: 1,
    explicacion: "Las raíces de 3 son irracionales.",
    retroalimentacion: "Ningún número racional cumple la condición."
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
    expresion: "Argumento:\nSi sale cara, yo gano.\nSi sale cruz, tú no ganas.\nSale cruz.\n...\nDetermine la regla utilizada para la conclusión 9: gano",
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
document.getElementById("contadorPreguntas").innerHTML = "Pregunta " + (indice + 1) + " de " + preguntas.length; 

document.getElementById("pregunta").innerHTML = p.expresion; 

let opcionesHTML = ""; 

for(let i = 0; i < p.opciones.length; i++){ opcionesHTML += <button onclick="verificar(${i})"> ${p.opciones[i]} </button> ; } 

document.getElementById("opciones").innerHTML = opcionesHTML; 
document.getElementById("barra").max = preguntas.length; 
document.getElementById("barra").value = indice; }

function verificar(opcion){

    let preguntaActual = preguntas[indice];

    let mensaje = "";

    if(opcion === preguntaActual.correcta){

        puntaje += 10;

        mensaje =
        "<h3>✅ Correcto</h3>" +
        "<p><b>Explicación:</b> " +
        preguntaActual.explicacion +
        "</p>" +
        "<p><b>Retroalimentación:</b> " +
        preguntaActual.retroalimentacion +
        "</p>";

    }else{

        mensaje =
        "<h3>❌ Incorrecto</h3>" +
        "<p><b>Explicación:</b> " +
        preguntaActual.explicacion +
        "</p>" +
        "<p><b>Retroalimentación:</b> " +
        preguntaActual.retroalimentacion +
        "</p>";
    }

    document.getElementById("retroalimentacion").innerHTML =
    mensaje;

    document.getElementById("puntaje").innerHTML =
    puntaje;

    // Espera 4 segundos antes de pasar a la siguiente pregunta
    setTimeout(() => {

        indice++;

        if(indice >= preguntas.length){
            finalizar();
        }else{
            mostrarPregunta();
        }

    }, 4000);

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