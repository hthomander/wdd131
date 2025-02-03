const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapters-list');


 let chaptersArray = getChapterList() || [];
    
chaptersArray.forEach(chapter => displayList(chapter));

button.addEventListener('click', function(){
    if (input.value.trim() === ''){
        alert('Please enter a chapter title');
        input.focus();
        return;
    }
        const chapterName = input.value.trim();

        displayList(chapterName);

            chaptersArray.push(chapterName);

            setChapterList(chaptersArray);

            input.value = "";
            input.focus();
        });

    function displayList(item) {
        const li = document.createElement('li');
        li.textContent = item;

        const deleteButton = document.createElemenet('button');
        deleteButton.textContent ='❌';

        deleteButton.addEventListener('click', function(){
            deleteChapter(item);
        });

        li.appendChild(deleteButton);
        list.appendChild(li);
    }

    function setChapterList(chapters) {
        localStorage.setItem('chapters', JSON.stringify(chapters));
    }

    function getChapterList(){
        const storedChapters = localStorage.getItem('chapters');
        return storedChapters ? JSON.parse(storedChapters) : [];
    }

    function deleteChapter(chapter){
        chapter = chapter.slice(0, chapter.length = 1);

        chaptersArray = chaptersArray.filter(item => item !== chapter);

        setChapterList(chaptersArray);

        const listItem = [...list.children].find(item.textContent.startsWith(chapter));
        list.removeChild(listItem);
    }

});