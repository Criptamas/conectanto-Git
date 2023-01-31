//los evemtos son cualquier cambio que ocurre en la pagina, desde que carga
//arrancamos desde el punto 0 (donde no ha arrancado)


//Evento onclick lo podemos llamar como atributo desde aca

//Otra manera de hacerlo y no es recomendable hoy en dia
// let button = document.querySelector(".button");

// button.onclick = ()=>{
//     alert('saludo')
// }

// otra manera  de hacerlo
// let button = document.querySelector(".button")
// button.addEventListener("click",saludar); //llamamos funcion
// //solo funciones comunes y no funcion flecha 

// function saludar(){ //declaramos funcion
//     alert('saludo')
// }

//pero la manera correcta de hacerlo es la siguiente
/*let button = document.querySelector(".button")
button.addEventListener('click',()=>{ //aqui si aplicamos la funcion flecha de manera correcta
    alert('Hola')
});*/


// let button = document.querySelector(".button");
// button.addEventListener('click',saludar);

// function saludar(){
//     alert('Hola!!!!'); // Asi eliminamos el elvento una vez ya hecho
//     button.removeEventListener('click',saludar); //De esta maenra ya no habra mas eventos si le presionamos 
// }



//objecto evento nos muestra el evento que se esta ejecutando (e)=>{console.log(e.target)}

//¿EN donde se dio click? this por defecto es window
// let button = document.querySelector(".button");
// button.addEventListener('click',(e)=>{
//         console.log(e.target );//Mucho mas especifico en donde se preciono
//          //con este especificamos en donde dimos click exactamente
//         //Nos muestra que se esta ejecutando
// });



// //Event Flujo de eventos
// // se ejecutan primeor los hijos y luego los padres
// //Burbuja y captura:
// let button = document.querySelector(".button");
// let contenedor = document.querySelector('.contenedor');
// contenedor.addEventListener('click',(e)=>{
//     alert('Presione el Contenedor');
// })
// button.addEventListener('click',(e)=>{
//     alert('Presione el button')
//     //Si colocara 2.stopPropagation() dejara de propagarse al presionar aca
// }) //Se ejecuta de menor a mayo
// //Aunque si le agg un true a uno ese que tiene el true pasa a ejecutarse el que tiene el true




//eventos del mouse

//dblclick soble click (funciona igual que el evento anterior)
//mouseover (si pasa el mose por determinada parte se ejecuta el evento)
//mouseout (si el mouse sale de un ligar se ejecuta un evento)
//constextmenu (boton derecho del mouse ejecuta un evento)
//mousenter(internet explorer)
//mouseleave (se ejecuta por cada movida del mouse)
//mousedown (se ejecuta donde apreta)
//mouseup(Funciona cuando apretamso y soltamos dentro del elemento)


//eventos del teclado


/*
let input = document.querySelector(".input-prueba");
let contenedor = document.querySelector('.contenedor');




input.addEventListener('keydown',(e)=>{
    console.log('Una tecla fue presionada'); //Una tecla es precionada
})


input.addEventListener('keypress',(e)=>{
    console.log('Una tecla fue presionada y se solto'); //una tecla es presionada y soltada la instante
})

input.addEventListener('keyup',(e)=>{
    console.log('Una tecla fue soltada'); //una tecla es solatda
})
*/



//Interfaz eventos

/*let exampleError =document.querySelector('class') 
exampleError.addEventListener('error', ()=>{
    console.log('error')
})
*/ //Esto lo que nos da es el evento de cuando algo da un error

//SI QUEREMOS EDIT EL BOY DEBEMOS COLOCA RL EL BODY Y NO EL DOCUMENT

//ESTE EVENT FUNCIONA SOLO CON WINDOW.LOAD
/*windows.addEventListener('load', ()=>{
    console.log('error')
})
// */ 
//Para ver antes de salir del sitio:

// window.addEventListener('beforeunload', ()=>{
//     console.log('Te estar por ir del sitio');
// })



// //para ver cuando ya saliste del sitio:
// window.addEventListener('unload', ()=>{
//     console.log('saliste sitio');
// })


/*  Para saber cuando cambia de tamaño del socumento : 

window.addEventListener('resize', ()=>{
    console.log('Esta cambiando de tamaño el documento');
})
*/




/*
Scroll:

window.addEventListener('scroll', ()=>{
    console.log('se ha scrolleado');
})


*/
/*
Select => se selcciona algun elemento del window

let inoutPrueba = document.querySelecotor('.input')
inputPrueba.addEventListener('select', ()=>{
    console.log('se ha scrolleado');
})


selectionstart y selectionend nos muestra desde que index iniciamos la seleccion
let inputPrueba = document.querySelector('.input')
inputPrueba.addEventListener('select', (e)=>{
    console.log(e.target.selectionStart);
})

let inputPrueba = document.querySelector('.input')
inputPrueba.addEventListener('select', (e)=>{
    console.log(e.target.selectionEnd);
})
¿Como saber loque seleccione?
let inputPrueba = document.querySelector('.input')
let contendor =  document.querySelector('.contenedor')
inputPrueba.addEventListener('select', (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let textoCompleto = input.value      <= valor del txt seleccionado
    contenedor.textContent =  textoCompleto.substring(star,end)
})
*/
// let inputPrueba = document.querySelector('.input')
// let contenedor =  document.querySelector('.contenedor')
// inputPrueba.addEventListener('select', (e)=>{
//     let start = e.target.selectionStart;
//     let end = e.target.selectionEnd;
//     let textoCompleto = inputPrueba.value;     
//     contenedor.innerHTML =  textoCompleto.substring(start,end)
// })

/*let input = document.querySelector('.input');
input.addEventListener('select', (e)=>{
    let start = e.target.selectionStart;
    let end = e.target.selectionEnd;
    let resultado = input.value;
    console.log(resultado.substring(start,end));

}
)

 para obtener los datos presionados en una tecla
let input = document.querySelector('.input');
input.addEventListener('keyup', (e)=>{
    console.log(e.key);

}
)

para obtener la ultima tecla 

let input = document.querySelector('.input');
let contenedor =  document.querySelector('.seleccionado')
input.addEventListener('keyup', (e)=>{
        let tecla = e.key;
        let contenido = `La ultima Ttecla seleccionada fue <b>${tecla}</b>`;
        contenedor.innerHTML = contenido;

}
)

*/


/*
TEMPORIZAODRES
Eslo que nos permite crear trbajos con tiempos

setTimeout()

setTimeout(()=>{ <= recibe una funcion u orden especifica
   document.write('HOLA') 
},2000 se agg el valor en milisegundos)

clearTimeout() elimina la setTimeout
let timers = setTimeout(()=>{
   document.write('HOLA') 
},2000)

cleatTimeout(timers); <=Con esto al final Asi no se ejecuta 


Y si quiero que sea continua?
setInterval(()=>{
   document.write('HOLA') 
},2000) <= hola cada 2 segundos

y como lo termino?
let interval = setInterval(()=>{
   document.write('HOLA') 
},2000)


entramos a la consola y colocamos
clearInterval(interval)

*/

 

//PROBLEMA DE COFLA



const nombre = document.getElementById('nombre');
const mail = document.getElementById('mail');
const materia = document.getElementById('materia');
const boton = document.getElementById('btn-enviar');
const resultado = document.querySelector('.resultado');

boton.addEventListener('click',(e)=>{
    // e.preventDefault() //Previene el envio de datos
    let error = validarCarpeta();
    if(error[0]){
        resultado.innerHTML  = error[1];
        resultado.classList('red');
    } else {
        resultado.innerHTML  = 'SOLICITUD ENVIADA CORRECTAMENTE';
        resultado.classList('green');
        resultado.classList.remove('red');
    }

});

const validarCarpeta = ()=>{
        let error = [];
        if(nombre.value.length < 5 || nombre.value.length > 40){
            error[0] = true;
            error[1] = 'Nombre invalido.'
            return error;
        } else if(
            mail.value.length <5 ||
            mail.value.length > 40 ||
            mail.value.indexOf('@') == -1 ||
            mail.value.indexOf('.') == -1){
                    error[0] = true;
                    error[1] = 'El mail es invalido';
                    return error
        } else if(materia.value < 4 || materia.value > 40){
            error[0] = true;
            error[1] = 'La materia no existe';
            

        }
        error[0] = false;
        return error;

    }



































