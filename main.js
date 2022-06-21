let count = 0;
const countHtml = document.getElementById('count-el');
const incButton = document.getElementById('increment-btn');
const saveEl = document.getElementById('save-el');
const saveButton = document.getElementById('save-btn');


incButton.addEventListener('click', () => {
    increment();
})
saveButton.addEventListener('click', () => {
    save();
})

function increment() {
    count += 1;
    countHtml.textContent = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    count = 0;
    countHtml.textContent = count;
}
