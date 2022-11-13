//Crea y redimenciona el grid
function createGrid(dimension){ 
    //Calcula cuántos elementos debe de haber por fila
    elements = dimension**2
    elementWidth = container.offsetWidth/dimension;

    //Calcula cuántos elementos tiene actualmente el contenedor
    childs = container.childElementCount;

    //Si se requieren crear más cuadros
    if (childs<elements) {
        for (let i = childs; i<elements; i++){
            const square = document.createElement('div');
            square.classList.add('grid-item');
            square.style.backgroundColor = '#ffffff';
            container.appendChild(square);
        }
    //Si se requieren eliminar algunos cuadros
    }else if (childs>elements){
        for (let i = elements; i<childs; i++){
            container.removeChild(container.lastElementChild);
        }
    }

    //Redimensiona cómo se ve el grid
    container.style.gridTemplateColumns = 'repeat('+dimension+',1fr)';
    let gridItems = document.querySelectorAll('.grid-item');

    //Dale la propiedad de hover
    gridItems.forEach(element => element.addEventListener('mouseover',function () {this.style.backgroundColor = 'salmon'}))

}
const container = document.getElementById('container')
let bgColor = '#ffffff';
container.style.backgroundColor = bgColor;

dimension = 15;
createGrid(dimension);
//template = 'repeat('+dimension+',1fr)';


//function pixel(){
    

let boton = document.querySelector(".boton");

boton.addEventListener("click",() => {
    let dimension = prompt("Seleccione las dimensiones del recuadro");
    createGrid(dimension);
    });
