// variables

// en resultado coloco la info
// el formulario me muestra cuando iniciar las acciones
// y el terminoBusqueda es el valor que tomo para hacer la API request
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const terminoBusqueda = document.querySelector('#termino').value;

// cuando cargue window escucha por el submit
window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

// al submit revisamos que tenga algun contenido
// si esta vacio mostrara un mensaje
// si tieneuna ciudad mostrara la ciudad
function validarFormulario(e) {
    e.preventDefault();
    if(terminoBusqueda === '') {
        imprimirAlerta('Agrega una capital');
        return;
    }
    buscarCapital();
} 

// definimos como se mostrara la alerta
function imprimirAlerta(msj) {

    const existeAlerta = document.querySelector('.bg-red-500');
    if(!existeAlerta) {
        const alerta = document.createElement('P');
        alerta.classList.add('mx-auto', 'text-center', 'font-bold',  'uppercase', 'rounded', 'bg-red-500', 'p-3', 'mt-4', 'max-w-lg', 'text-white', 'border-lg' );
        alerta.textContent = msj;
        resultado.appendChild(alerta);
        setTimeout(() => {
            alerta.remove()
        }, 3000)
    }   
}

// hacemos la API request
function buscarCapital() {
    const capital = document.querySelector('#termino').value;
    const key = '10971b499be61b351760e8d57f0e3a4d';
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${key}&units=metric&lang=es`;
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(result => {
            console.log(result)
            mostrarCapital(result);
    })
}


// mostramos el resultado en pantalla
function mostrarCapital(result) {
    const ciudad = result['name']
    const temp = result['main']['temp']
    const min = result['main']['temp_min']
    const max = result['main']['temp_max']
    const descripcion = result['weather'][0]['description']
    resultado.innerHTML += `
    <section class="flex-col justify-center mb-1 rounded bg-indigo-100">
        <h2 class="text-center p-3 uppercase">Clima en ${ciudad}</h2>
        <p class="text-center p-1" >Temperatura Actual: ${temp}°</p>
        <p class="text-center p-1" >Temperatura Mínima: ${max}°</p>
        <p class="text-center p-1 pb-3" >Temperatura Máxima: ${min}°</p>
        <p class="text-center p-1 pb-3" >Temperatura Máxima: ${descripcion}</p>
    </section>
    `;   
}















