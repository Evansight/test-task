// Отримуємо посилання на елементи форми
const commentForm = document.querySelector('#comment-form');
const commentNameInput = document.querySelector('#name');
const commentTextarea = document.querySelector('#comment');
const commentSubmitButton = document.querySelector('#submit-comment');

// Отримуємо посилання на контейнер для коментарів та його список
const commentsContainer = document.querySelector('#comments');
const commentsList = commentsContainer.querySelector('.comments-cont');

// Обробник події для надсилання форми
commentForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Забороняємо стандартну поведінку форми

    // Отримуємо дані з полів форми
    const name = commentNameInput.value.trim();
    const commentText = commentTextarea.value.trim();

    // Створюємо елемент коментаря
    const commentElement = document.createElement('span');
    commentElement.innerHTML = `<strong>${name}:</strong> <span class="comment-text">${commentText}</span>`;

    // Додаємо коментар до списку
    commentsList.appendChild(commentElement);

    // Очищуємо поля форми
    commentNameInput.value = '';
    commentTextarea.value = '';
});