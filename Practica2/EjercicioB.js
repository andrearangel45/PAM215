const productos = [
    { nombre: "Laptop", precio: 12000},
    { nombre: "Mouse", precio: 250},
    { nombre: "Teclado", precio: 750},
    { nombre: "Monitor" , precio: 3000} 
];

const nombres = productos.filter (newP => newP.precio > 1000).map(newP => newP.nombre);


console.log(nombres);