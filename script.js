// Select Element

let count = 0;

const counter = document.getElementById('counter');

// Add Event Listener
document.getElementById('incrBtn').addEventListener('click', () => {
    counter.textContent = ++count;
});
document.getElementById('decreBtn').addEventListener('click', () => {
    counter.textContent = --count;
});
document.getElementById('incrByTen').addEventListener('click', () => {
    counter.textContent = count + 10;
});
document.getElementById('decreByTen').addEventListener('click', () => {
    counter.textContent = count - 10;
});
document.getElementById('reset').addEventListener('click', () => {
    counter.textContent = 0;
});