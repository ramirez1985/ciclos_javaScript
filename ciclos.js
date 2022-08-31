for (let i = 1; i <=10; i++){
    let ingresaNombre = prompt("Ingresa tu nombre");
    alert( "Turno N "+i+" Nombre: "+ ingresaNombre);
}

let diaSemana = prompt("Que dia de la semana es hoy?");
while(diaSemana != "ESC"){
    switch (diaSemana){
        case "lunes":
    alert("Hoy es lunes.");
    break;

    case "Martes":
    alert("Hoy es Martes.");
    break;

    case "Miercoles":
    alert("Hoy es Miercoles.");
    break;

    case "Jueves":
    alert("Hoy es Jueves.");
    break;

    case "Viernes":
    alert("Hoy es Viernes.");
    break;

    case "Sabado":
    alert("Hoy es Sabado.");
    break;

    case "Domingo":
    alert("Hoy es Domingo.");
    break;
    default:
        alert("No entiendo a que te refieres?")
        break;

    }
    diaSemana = prompt ("Ingresa un dia de la semana");
}
