const pad = document.querySelector('.sketch');
const selectedSize = document.querySelector('#gridsize');
const padCount = selectedSize.value * selectedSize.value;
const gridPrint = document.querySelector('#grid-print');
const clearBtn = document.querySelector('#clearpad');
const rainbowBtn = document.querySelector('#rainbow');

let squares;
let mouseIsHeld;
let rainbowMode = false;

function init() {
    
    // Initialize with a default pad of 16 x 16 squares
    generatePad(16);


    // Initialize event listeners on the inputs
    window.addEventListener('mousedown', () => {
        setTimeout(() => {
            mouseIsHeld = true;
        }, 100)
    })

    window.addEventListener('mouseup', () => {
        setTimeout(() => {
            mouseIsHeld = false;
        }, 100)
        
    })

    selectedSize.addEventListener('change', () => {
        pad.innerHTML = "";
        generatePad(selectedSize.value);
    })

    clearBtn.addEventListener('click', () => {
        squares.forEach(sq => {
            sq.classList.remove('clr-black');
            sq.removeAttribute('style');
        })
    });
    
    rainbowBtn.addEventListener('click', () => {
        rainbowBtn.classList.toggle('rainbowAnim');
        rainbowMode = !rainbowMode;
    })

}

// Generate and format pad based on selected slider value
function generatePad(size) {
    for (let i = 0; i < size * size; i++) {
        const sq = document.createElement('div');
        sq.classList.add('square');
        pad.appendChild(sq);
    }
    gridPrint.innerHTML = `Grid Size: <strong>${selectedSize.value} x ${selectedSize.value}</strong>`;
    pad.style.gridTemplateColumns = `repeat(${selectedSize.value}, 1fr)`;
    pad.style.gridTemplateRows = `repeat(${selectedSize.value}, 1fr)`;
    squares = document.querySelectorAll('.square');
    generateListeners(squares);
}

// Generate event listeners for all of the pad squares
function generateListeners(squares) {
    squares.forEach(sq => {
        sq.addEventListener("mouseover", () => {
            if (mouseIsHeld) {
                if (rainbowMode) {
                    sq.style.backgroundColor = generateRandomClr();
                } else {
                    sq.style.backgroundColor = `#000000`;
                }
            }
        })
    })
}

function generateRandomClr() {
    let rgbArray = [];
    let rgbString = "";
    for (let i = 0; i < 3; i++) {
        rgbArray.push(Math.floor(Math.random() * 255));
    }
    rgbString = `rgba(${rgbArray[0]},${rgbArray[1]},${rgbArray[2]},1)`
    return rgbString;
}

function assignRandomClr() {
    console.log(generateRandomClr());
}

init();
