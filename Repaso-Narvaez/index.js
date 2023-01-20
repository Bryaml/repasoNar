var curso = {
nombre:"",
descripcion:"",
docente: {
    nombre:"",
    cursos:0
}


};
function actualizar(){
  
    curso.nombre = document.getElementById("nombre").value;
    curso.descripcion = document.getElementById("descripcion").value;
    curso.docente.nombre = document.getElementById("docente").value;
    curso.docente.cursos = document.getElementById("cursos").value;
  actualizarFicha();

}

function actualizarFicha(){
document.getElementById("titulo").innerHTML = curso.nombre;
document.getElementById("descrip").innerHTML = curso.descripcion;
document.getElementById("nombre-docente").innerHTML = curso.docente.nombre;
document.getElementById("total").innerHTML = curso.docente.cursos;

}