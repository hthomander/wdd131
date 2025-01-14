const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector(ul);

button.addEventListener('click', function() {
    const li = document.createElement('li');

    li.textContent = input.ariaValueMax;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌'

    li.appendChild(deleteButton);
    
    list.appendChild(li);

    input.value = '';

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
    });
});