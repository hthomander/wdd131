const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapters-list');

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

button.addEventListener('click', function(){
    if (input.value.trim() === '') {
        alert('Please enter a chapter title');
        input.focus();
        return;
    }

    const li = document.createElement('li');
    li.textContent = input.value;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';

    li.appendChild(deleteButton);
    list.appendChild(li);

    input.value = '';
    input.focus();

    deleteButton.addEventListener('click', function(){
        list.removeChild(li);
    });

});
