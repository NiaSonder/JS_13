'use strict';

// HW9 — Основи роботи з DOM. Атрибути, властивості, події
const toggleButton = document.querySelector('#toggleButton');
const statusMessage = document.querySelector('#statusMessage');

function getCurrentDateTime() {
    const now = new Date();
    return now.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    }).replace(',', '');
}

const updateState = (isDarkMode) => {
    document.body.style.backgroundColor = isDarkMode ? '#333' : '#f0f0f0';
    statusMessage.style.color = isDarkMode ? '#f0f0f0' : '#333';
    toggleButton.textContent = isDarkMode ? 'Turn on' : 'Turn off';
}

let isDarkMode = JSON.parse(localStorage.getItem('isDarkMode')) || false;
let lastChange = localStorage.getItem('lastChange') || '';

updateState(isDarkMode);
if (lastChange) {
    statusMessage.textContent = isDarkMode
        ? `Last turn off: ${lastChange}`
        : `Last turn on: ${lastChange}`;
}

toggleButton.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    lastChange = getCurrentDateTime();

    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));
    localStorage.setItem('lastChange', lastChange);

    updateState(isDarkMode);
    statusMessage.textContent = isDarkMode
        ? `Last turn off: ${lastChange}`
        : `Last turn on: ${lastChange}`;
})