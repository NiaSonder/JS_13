"use strict";

// Отримуємо необхідні DOM елементи
const form = document.querySelector('.create-task-form'); // Форма для створення задач
const taskInput = document.querySelector('.task-input'); // Поле для введення задачі
const collection = document.querySelector('.collection'); // Список задач
const clearButton = document.querySelector('.clear-tasks'); // Кнопка для видалення всіх задач
const filterInput = document.querySelector('.filter-input'); // Поле для фільтрації задач

// Ключ для збереження задач в LocalStorage
const TASKS_STORAGE_KEY = 'tasks';

// Додаємо обробники подій
document.addEventListener('DOMContentLoaded', renderTasks); // При завантаженні сторінки відображаємо задачі з LocalStorage
form.addEventListener('submit', addTask); // Додаємо задачу при сабміті форми
clearButton.addEventListener('click', removeTasks); // Видаляємо всі задачі при натисканні на кнопку
collection.addEventListener('click', handleTaskActions); // Обробляємо видалення або редагування задачі
filterInput.addEventListener('input', filterTasks); // Фільтруємо задачі при введенні тексту у поле

// Відображення задач з LocalStorage
function renderTasks() {
    if (getTasksFromLocalStorage()) {
        const tasks = JSON.parse(getTasksFromLocalStorage());

        // Створюємо елемент для кожної задачі
        tasks.forEach((task) => {
            createTask(task);
        });
    }
}

// Створення HTML-елементу для задачі
function createTask(task) {
    const li = document.createElement('li');
    li.innerHTML = `<span class="task-text">${task.text}</span>`;
    li.classList.add('task');
    li.setAttribute('data-id', task.id); // Присвоюємо задачі унікальний ID

    // Додаємо кнопку для редагування задачі
    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.className = 'button-icon button-edit';

    // Додаємо кнопку для видалення задачі
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    deleteButton.className = 'button-icon button-delete';

    // Створюємо контейнер для кнопок
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container'; // Додаємо класи для контейнера

    // Додаємо кнопки в контейнер
    buttonContainer.append(editButton);
    buttonContainer.append(deleteButton);

    // Додаємо контейнер з кнопками до елемента задачі
    li.append(buttonContainer);

    // Додаємо задачу до колекції (списку)
    collection.append(li);
}


// Додавання нової задачі
function addTask(event) {
    event.preventDefault(); // Відміняємо перезавантаження сторінки при сабміті

    const currentForm = event.target;
    const inputValue = currentForm.task.value; // Отримуємо значення з поля вводу

    if (!inputValue) {
        return; // Якщо поле порожнє, не додаємо задачу
    }

    const task = {
        id: Date.now(), // Генеруємо унікальний ID для задачі на основі Timestamp
        text: inputValue
    };

    createTask(task); // Створюємо нову задачу
    setTaskToLocalStorage(task); // Зберігаємо задачу в LocalStorage

    currentForm.reset(); // Очищаємо поле вводу
}

// Зберігаємо задачу в LocalStorage
function setTaskToLocalStorage(task) {
    let tasks = [];

    if (getTasksFromLocalStorage()) {
        tasks = JSON.parse(getTasksFromLocalStorage()); // Отримуємо існуючі задачі
    }

    tasks.push(task); // Додаємо нову задачу з унікальним ID
    setTasksToLocalStorage(tasks); // Оновлюємо LocalStorage
}

// Оновлюємо LocalStorage
function setTasksToLocalStorage(tasks) {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks)); // Зберігаємо задачі у форматі JSON
}

// Отримуємо задачі з LocalStorage
function getTasksFromLocalStorage() {
    return localStorage.getItem(TASKS_STORAGE_KEY); // Повертаємо задачі у вигляді рядка
}

// Очищаємо LocalStorage
function clearTasksFromLocalStorage() {
    localStorage.removeItem(TASKS_STORAGE_KEY); // Видаляємо всі задачі з LocalStorage
}

// Видалення всіх задач
function removeTasks() {
    collection.innerHTML = ''; // Очищаємо HTML-код списку задач
    clearTasksFromLocalStorage(); // Очищаємо LocalStorage
}

// Обробка дій для завдань (видалення або редагування)
function handleTaskActions(event) {
    if (event.target.classList.contains('button-delete')) {
        removeTask(event); // Видаляємо задачу
    } else if (event.target.classList.contains('button-edit')) {
        editTask(event); // Редагуємо задачу
    }
}

// Видалення окремої задачі
function removeTask(event) {
    const li = event.target.closest('.task'); // Знаходимо батьківський елемент (задачу)
    const tasks = JSON.parse(getTasksFromLocalStorage()); // Отримуємо задачі з LocalStorage

    // Фільтруємо задачі, залишаючи лише ті, які не мають ID видаленої задачі
    const filteredTasks = tasks.filter(task => task.id.toString() !== li.getAttribute('data-id'));

    removeTasks(); // Видаляємо всі задачі з інтерфейсу
    setTasksToLocalStorage(filteredTasks); // Зберігаємо оновлений список задач
    renderTasks(); // Відображаємо задачі після видалення
}

// Редагування окремої задачі
function editTask(event) {
    const li = event.target.closest('.task'); // Знаходимо батьківський елемент (задачу)
    const taskId = li.getAttribute('data-id');
    const tasks = JSON.parse(getTasksFromLocalStorage()); // Отримуємо задачі з LocalStorage
    const task = tasks.find(task => task.id.toString() === taskId); // Знаходимо задачу за ID

    // Відкриваємо діалог для редагування
    const newTaskText = prompt('Edit your task:', task.text);
    if (newTaskText !== null && newTaskText.trim() !== '') {
        task.text = newTaskText; // Оновлюємо текст задачі

        // Оновлюємо LocalStorage
        setTasksToLocalStorage(tasks);

        // Оновлюємо інтерфейс
        li.querySelector('.task-text').textContent = newTaskText;
    }
}

// Фільтрація задач
function filterTasks(event) {
    const filterQuery = event.target.value; // Отримуємо значення з поля фільтрації
    const tasks = collection.querySelectorAll('.task'); // Отримуємо всі задачі

    tasks.forEach((task) => {
        const taskValue = task.querySelector('.task-text').textContent; // Отримуємо текст задачі
        if (!taskValue.includes(filterQuery.trim())) {
            task.classList.add('hidden'); // Ховаємо задачі, які не відповідають запиту
        } else {
            task.classList.remove('hidden'); // Показуємо задачі, що відповідають запиту
        }
    });
}
