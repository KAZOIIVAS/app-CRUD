console.log("hola mundo");

const inputval=document.getElementById('input-text');
const  btnAgregar=document.querySelector('#agregar');



let arrglo= [];



     //guardamos en el localstorage
 btnAgregar.addEventListener('click',() => {
    arrglo.push(inputval.value)
    localStorage.setItem('lista-tareas',arrglo)
    inputval.value=''
    console.log(arrglo)
    renderelementos(arrglo)

})//



function renderelementos() {
    const lista=document.getElementById('tarea');
    lista.innerHTML='';
    arrglo.forEach(function(item,i){
        lista.innerHTML +=  `
        <li class="list-group-item list-group-item-light d-flex justify-content-start align-items-center">
            ${item}
            <button onclick="borrarElemento(${i})" class="btn btn-danger">Borrar</button>
            <button onclick="Editar(${i})"class="btn btn-outline-warning">Editar</button>
        </li>
         `
    })//fin foreach
    
}//fin de la funcion render
function borrarElemento(posicion) {
    console.log(posicion);
    arrglo.splice(posicion,1);
    localStorage.setItem('lista-tareas',arrglo);
    renderelementos();
    console.log(arrglo);
    
}

function Editar(i){
    inputval.value=arrglo[i];
    let val=i;
 
    btnAgregar.style.display="none";
    const newbtn=document.getElementById("edit");
    newbtn.innerHTML += `
    <button  id="Actualizar" onclick="actualizar(${val})" class="btn btn-outline-success">Guardar</button>
   `
 
  
    console.log("yes");

}
function actualizar(j) {
       arrglo[j]=inputval.value;
        localStorage.setItem('lista-tareas',arrglo);
        renderelementos();
        inputval.value='';

         let otrobtn=document.getElementById('Actualizar');
         otrobtn.remove();
         btnAgregar.style.display="initial";
         console.log(arrglo);
   }

