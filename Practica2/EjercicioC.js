const personas = [
    { nombre: "Ana", edad: 22},
    { nombre: "Luis", edad: 35},
    { nombre: "Maria", edad: 28}
];

const buscar = personas.find( n => n.nombre === "Luis" );
console.log(buscar); 

personas.forEach (persona =>{
    console.log (" Nombre "+ [persona.nombre], "edad " + [persona.edad])
});

const suma = personas.reduce((suma, persona) => suma + persona.edad, 0);
console.log("Total edades: " + suma); 