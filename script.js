function getLstTareas(){
    let lstTareas = [];

    if(localStorage.lstTareas){
        lstTareas = JSON.parse(localStorage.getItem('lstTareas'));
    }
    else{
        localStorage.setItem('lstTareas', JSON.stringify(lstTareas));
    }

    return lstTareas;
}

function setLstTareas(lst){
    localStorage.setItem('lstTareas', JSON.stringify(lst));
}

function ArreglarIndices(lst){
    for(let i = 0; i < lst.length; i++){
        lst[i].id = i + 1;
    }
}

function SetDivMensaje(mensaje){
    let divMensaje = document.getElementById('divMensaje');
    divMensaje.innerHTML = mensaje;
}

function ExisteTarea(lst, tarea){    
    let existe = false;
    
    lst.forEach(element => {
        if(tarea === element.tarea){
            SetDivMensaje("La tarea ya existe");
            existe = true;
        }
    });

    // lst.find( item => {
    //     if(tarea === item.tarea){
    //         SetDivMensaje("La tarea ya existe");
    //         existe = true;
    //     }
    // });

    return existe;
}

function TareaRealizada(id){
    let lstTareas = getLstTareas();

    lstTareas[id-1].realizada = true;

    setLstTareas(lstTareas);

    DesplegarListaTareas(lstTareas);
}

function TareaEliminar(id){
    let lstTareas = getLstTareas();

    lstTareas.splice(id-1, 1);

    setLstTareas(lstTareas);

    DesplegarListaTareas(lstTareas);
}

function CrearItemEnLista(id, realizada, texto){
    let nodo = document.createElement('li');
    nodo.style.color = realizada === true ? '#888888' : 'black';

    if(realizada){
        nodo.innerHTML = `${texto} <br /><button type="button" onclick="TareaEliminar(${id})">Eliminar</button>`;
    }
    else{
        nodo.innerHTML = `${texto} <br /><button type="button" onclick="TareaRealizada(${id})">Realizada</button> <button type="button" onclick="TareaEliminada(${id})">Eliminar</button>`;
    }

    return nodo;
}

function DesplegarListaTareas(lst){
    let ulLstTareas = document.getElementById('ulLstTareas');

    //se elimina todos los hijos de la lista ul
    while(ulLstTareas.firstChild){
        ulLstTareas.removeChild(ulLstTareas.firstChild);
    }

    lst.forEach(item => {
        ulLstTareas.appendChild(CrearItemEnLista(item.id, item.realizada, item.tarea));
    });
}

function AgregarTarea(event){
    let tarea = document.getElementById('txtTarea').value;
    let lstTareas = [];

    SetDivMensaje('');

    // if(localStorage.lstTareas){
    //     lstTareas = JSON.parse(localStorage.getItem('lstTareas'));
    // }

    lstTareas = getLstTareas();

    if(lstTareas.length > 0)
        ArreglarIndices(lstTareas)

    if(tarea !== undefined && tarea !== null && tarea !== ''){
        let index = lstTareas.length;

        if(!ExisteTarea(lstTareas, tarea)){
            lstTareas.push({
                id: index+1,
                tarea,
                realizada: false
            });
        }
    }

    DesplegarListaTareas(lstTareas);
    
    document.getElementById('txtTarea').value = '';

    //localStorage.setItem('lstTareas', JSON.stringify(lstTareas));
    setLstTareas(lstTareas);
}