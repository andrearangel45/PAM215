//Crea una función obtenerDatos() que simule una llamada a una API con setTimeout y
//usar async/await para esperar el resultado.

function simularPeticionAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos(){
     const datos = await simularPeticionAPI();
     console.log(datos);
}

obtenerDatos();