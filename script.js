
const container = document.getElementById('container')
let bgColor = '#ffffff';
container.style.backgroundColor = bgColor;

dimension = 15
elements = dimension**2

elementWidth = container.offsetWidth/dimension;

//container.style.gridTemplateRows = "repeat(${dimension}, ${elementWidth}px)";

for (let i = 0; i<elements; i++){
    const square = document.createElement('div');
    square.classList.add('grid-item');
    if(i%2==0){
        square.style.backgroundColor = '#ff1fff';
    }else{
        square.style.backgroundColor = '#AfA101';
    }
    container.appendChild(square);
    square.classList.add('border-top-left')
    
}
template = 'repeat('+dimension+',1fr)'
container.style.gridTemplateColumns = template//'repeat(3,1fr)'
let gridItems = document.querySelectorAll('.grid-item');

