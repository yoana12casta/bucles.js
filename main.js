let list = document.getElementById('lista');
for (let i = 0; i < 5; i++)
    {
        let newElement = document.createElement('li');
        newElement.textContent = `Elemento ${i}`;
        list.appendChild(newElement);
    }

