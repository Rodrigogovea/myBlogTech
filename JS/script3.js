const data = [
    {
        nombre: "Rodrigo",
        apellido: "Govea",
        edad: 37
    },
    {
        nombre: "Juan",
        apellido: "Gomez",
        edad: 25
    },
    {
        nombre: "Alberto",
        apellido: "Diaz",
        edad: 40
    },
    {
        nombre: "Maria",
        apellido: "Sanchez",
        edad: 30
    }
]

console.log(data);

for(var i = 0; i< data.length; i++)
{
    console.log(`Nombre: ${data[i].nombre} ${data[i].apellido}, edad: ${data[i].edad}`);
}

data.map(person => console.log(person.nombre));