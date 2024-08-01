function menu_principal() {
    console.log("*************************************");
    console.log("Bienvenido a la plataforma de cursos interactivos");
    console.log("1. Para agregar un curso");
    console.log("2. Para eliminar un curso");
    console.log("3. Para listar cursos");
    console.log("4. Para cargar cursos");
    console.log("*************************************");
}

const cursos = [
    {
        nombre: "curso_python",
        descripcion: "Descripción de curso_python",
        contenido: "Contenido de curso_python"
    },
    {
        nombre: "curso_HTML",
        descripcion: "Descripción de curso_HTML",
        contenido: "Contenido de curso_HTML"
    },
    {
        nombre: "curso_CSS",
        descripcion: "Descripción de curso_CSS",
        contenido: "Contenido de curso_CSS"
    },
    {
        nombre: "curso_JavaScript",
        descripcion: "Descripción de curso_JavaScript",
        contenido: "Contenido de curso_JavaScript"
    },
    {
        nombre: "curso_SQL",
        descripcion: "Descripción de curso_SQL",
        contenido: "Contenido de curso_SQL"
    },
    {
        nombre: "curso_Java",
        descripcion: "Descripción de curso_Java",
        contenido: "Contenido de curso_Java"
    }
]


function agregar_curso(cursos) {
    var curso = prompt("Ingrese el nombre de su curso a guardar: ");
    var descripcion = prompt("Ingrese la descripción del curso: ");
    var contenido = prompt("Ingrese el contenido del curso: ");
    
    var curso_existente = cursos.find(c => c.nombre === curso);
    
    if (!curso_existente) {
        cursos.push({ nombre: curso, descripcion: descripcion, contenido: contenido });
        console.log("Curso agregado con éxito");
        console.log(cursos);
    } else {
        console.log("El curso ya existe, inténtelo de nuevo.");
    }
    return cursos;
}


function eliminar_curso(cursos) {
    var curso_a_eliminar = prompt("Ingrese el nombre del curso que desea eliminar: ");
    var indice = cursos.findIndex(c => c.nombre === curso_a_eliminar);
    
    if (indice !== -1) {
        cursos.splice(indice, 1);
        console.log("Curso eliminado con éxito!");
        console.log(cursos);
    } else {
        console.log("Este curso no existe");
    }
    
    return cursos;
}

function editar_curso(cursos) {
    var curso_existente = prompt("Ingrese el nombre del curso que desea editar: ");
    var indice = cursos.findIndex(c => c.nombre === curso_existente);

    if (indice !== -1) {
        var nuevo_nombre = prompt("Ingrese el nuevo nombre para el curso: ");
        var nueva_descripcion = prompt("Ingrese la nueva descripción para el curso: ");
        var nuevo_contenido = prompt("Ingrese el nuevo contenido para el curso: ");
        
        cursos[indice] = { 
            nombre: nuevo_nombre, 
            descripcion: nueva_descripcion, 
            contenido: nuevo_contenido 
        };
        
        console.log("Curso editado con éxito");
        console.log(cursos);
    } else {
        console.log("El curso no se encontró, inténtelo de nuevo.");
    }
    return cursos;
}

function listar_cursos(cursos) {
    console.log("******* LISTADO DE CURSOS **********");
    for(i of cursos){
        console.log(i)
    }
    console.log("************************************");
}




menu_principal();
let opc = prompt("Ingrese su opción: ");

if (opc === "1") {
    agregar_curso(cursos);
} else if (opc === "2") {
    eliminar_curso(cursos);
} else if (opc === "3") {
    listar_cursos(cursos);
} else if (opc === "4"){
    editar_curso(cursos);
}else {
    console.log("Opción no válida");
}
