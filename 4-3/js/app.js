const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e) {
    e.preventDefault();
    const terminoBusqueda = document.querySelector('#termino').value;
    if(terminoBusqueda === '') {
        imprimirAlerta('Agrega una capital');
        return;
    }
    buscarCapital();
    
} 

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

function mostrarCapital(result) {
    const ciudad = result['name']
    const temp = result['main']['temp']
    const min = result['main']['temp_min']
    const max = result['main']['temp_max']
    resultado.innerHTML += `
    <section class="flex-col justify-center  rounded bg-indigo-100">
        <h2 class="text-center p-3 uppercase">Clima en ${ciudad}</h2>
        <p class="text-center p-1" >Temperatura Actual: ${temp}°</p>
        <p class="text-center p-1" >Temperatura Mínima: ${max}°</p>
        <p class="text-center p-1 pb-3" >Temperatura Máxima: ${min}°</p>
    </section>
    `;   
}















