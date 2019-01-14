"use strict";

const table = document.querySelector('table');
const tableCells = table.getElementsByTagName('td');
const btnChangeColors = document.getElementById('changeColors');
const message = document.querySelector('.errorMsg');

function changeColors(e) {
    e.preventDefault();
    const selectedCellColor = document.getElementById('selectedCellColor').value;
    const selectedCellNumber = document.getElementById('selectedCellNumber').value;
    if(selectedCellColor && selectedCellNumber){
        message.classList.add('hidden');
        for(let i = 0; i < tableCells.length; i++){
            if(i+1 === parseInt(selectedCellNumber)){
                continue;
            }
            tableCells[i].style.background = selectedCellColor;
        }
    }
    else{
        message.classList.remove('hidden');
    }
}

btnChangeColors.addEventListener('click', changeColors);