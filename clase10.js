var sasha = 
{
    nombre:'Erik',
    apellido: 'Corrales',
    edad : 17,
    ingeniero : true,
    cocinero : false,
    cantante : false,
    futbolista: true
}


function definirProfesiones(persona)
{
    console.log(persona.nombre+' es: ');
    if(persona.ingeniero)
    {
        console.log('Ingeniero');
    }

    if(persona.cantante)
    {
        console.log('cantante');
    }

    if(persona.cocinero)
    {
        console.log('cocinero');
    }
}


function mayorDeEdad(persona){
    if(persona.edad>18)
    {
        console.log("Es mayor de edad");
    }
    else
    {
        console.log("No es mayor de edad");
    }
}