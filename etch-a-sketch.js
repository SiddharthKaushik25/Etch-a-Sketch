const container = document.getElementById('container');
let rows = container.getElementsByClassName('gridRow');
let cells = document.getElementsByClassName('cell');

function defaultGrid(){
    makeRows(16);
    makeColumns(16);
}

function newGrid(num){
    makeRows(num);
    makeColumns(num);
}

function makeRows(rowNum){
    for(i=0; i<rowNum; i++){
        let row = document.createElement('div');
        container.appendChild(row).className='gridRow';
    };
};

function makeColumns(cellNum){
    for(i=0; i< rows.length; i++){
        for(j=0; j< cellNum; j++){
            let newCell = document.createElement('div');
            rows[j].appendChild(newCell).className='cell';
        };
    };
};

const cell = document.querySelector('.cell');
cell.addEventListener('mouseover', function(){
    cell.style.background = 'blue';
})

const btn = document.querySelector('.btn');

btn.addEventListener('click', function(){
    let num= prompt("Enter the number of squares per side","16");
    newGrid(num);
})