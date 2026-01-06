const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const reset = document.getElementById('reset');
const countEl = document.getElementById('count');

function updateCountColor() {
    if (count < 0) {
        countEl.style.color = 'red';
    } else if (count > 0) {
        countEl.style.color = 'green';
    } else {
        countEl.style.color = 'black';
    }
}

function renderCount(){
    countEl.innerText = count;
    updateCountColor();
}

let count = 0;

// renderCount();// Initial render (HTML:<div id="count">0</div> and JS:let count = 0;Problem:HTML says 0 & JS says 0: Two places controlling the same thing ❌ What “single source of truth” means We decide:JS is the boss. HTML is just a container.So HTML should NOT decide the number. Updated HTML (no hardcoded value)<div id="count"></div>). Let JS initialize the UI Solution: call the renderCount() once at the end to sync the UI with the initial state of count

increment.addEventListener('click', () => {
    count += 1;
    renderCount();
});

decrement.addEventListener('click', () => {
    count -= 1;
    renderCount();
}); 

reset.addEventListener('click', () => {
    count = 0;
    renderCount();
});

