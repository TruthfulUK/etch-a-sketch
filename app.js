const pad = document.querySelector('.sketch');
const selectedSize = document.querySelector('#gridsize');
const padCount = selectedSize.value * selectedSize.value;
const gridPrint = document.querySelector('#grid-print');
const clearBtn = document.querySelector('#clearpad');

let squares;

function init() {
    generatePad(16);


    // Let's initialize event listeners on the toolkit inputs!

    selectedSize.addEventListener('change', () => {
        pad.innerHTML = "";
        generatePad(selectedSize.value);
    })

    clearBtn.addEventListener("click", () => {
        squares.forEach(sq => {
            sq.classList.remove('clr-black');
        })
    });
    
}

function generatePad(size) {
    for (let i = 0; i < size * size; i++) {
        const sq = document.createElement('div');
        sq.classList.add('square');
        pad.appendChild(sq);
        gridPrint.innerHTML = `Grid Size: <strong>${selectedSize.value} x ${selectedSize.value}</strong>`;
    }
    pad.style.gridTemplateColumns = `repeat(${selectedSize.value}, 1fr)`;
    pad.style.gridTemplateRows = `repeat(${selectedSize.value}, 1fr)`;
    squares = document.querySelectorAll('.square');
    generateListeners(squares);
}

function generateListeners(squares) {
    squares.forEach(sq => {
        sq.addEventListener("mouseover", () => {
            sq.classList.add('clr-black');
        })
    })
}

init();
