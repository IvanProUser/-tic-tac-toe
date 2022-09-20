let btn = document.querySelector('.btn');
let none1 = document.querySelector('.all0');
let cells = document.querySelectorAll('#field td');
let cellsAll = document.querySelector('#field');
let win = document.querySelector('.win');
let winBtn = document.querySelector('.win__btn')
// let img = cell.innerHTML = '<svg jsname="uECznc" aria-label="Х" role="img" viewBox="0 0 128 128" style="visibility: visible;"><path class="hFJ9Ve" d="M16,16L112,112" style="stroke: rgb(84, 84, 84); stroke-dasharray: 135.764; stroke-dashoffset: 0;"></path><path class="hFJ9Ve" d="M112,16L16,112" style="stroke: rgb(84, 84, 84); stroke-dasharray: 135.764; stroke-dashoffset: 0;"></path></svg>'
btn.addEventListener('click', () => {
    none1.style.display = 'none';
    cellsAll.style.display = 'flex';
})
function start(cells) {
    let i = 0;
    for (let cell of cells) {
        cell.addEventListener('click', ()=> {
            if (cell.textContent === '') {
                if (i % 2 === 0) {
                   cell.textContent = 'x'
                } else {
                    cell.textContent = '0';
                }
                i++;
                if (i === 8 && isVictory(cells) === false) {
                    alert('Ничья');
                    cellsAll.style.display = 'none';
                    win.style.display = 'flex'
                }

                if (isVictory(cells)) {
                    win.style.display = 'flex'
                    cellsAll.style.display = 'none';
                    alert(`Выйграл ${cell.textContent}`);
                }
            }
        })
    }
    winBtn.addEventListener('click', () => {
        cellsAll.style.display = 'flex';
        win.style.display = 'none'
        i = 0;
        for (let cell of cells) {
            cell.textContent = '';
        }
    })
}
function isVictory(cells) {
    let combs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let comb of combs) {
        if (cells[comb[0]].textContent === cells[comb[1]].textContent && cells[comb[1]].textContent === cells[comb[2]].textContent && cells[comb[0]].textContent != '') {
            return true;
        }
    }
    return false;
}
start(cells);