/*

Вам необходимо создать функцию renderAlbums(), которая будет отображать данные об альбомах в DOM-дереве. 
Для получения данных используйте следующий url: «https://jsonplaceholder.typicode.com/albums»

HTML-шаблон для элемента альбома выглядит следующим образом:

<li>название альбома</li>
Итоговые HTML-элементы c информацией об имени альбома поместите в тег <ol> с классом, равным "data-container".

Для удобства необходимо добавить элемент <span> с текстом «Загрузка...» перед загрузкой альбомов, 
и спрятать этот элемент после загрузки данных.

Используйте исключительно async/await и try...catch...finally. Если при загрузке альбомов произошла ошибка, 
то внутрь тега с классом равным "data-container" поместите текст: «Произошла ошибка в получении данных об альбомах...».

Для стилизации можно использовать следующий CSS-файл.

*/

async function renderAlbums() {
    const url = "https://jsonplaceholder.typicode.com/albums";
    const dataContainer = document.getElementById("data-container");
    const loader = document.getElementById("loader");

    try {
        loader.hidden = false;
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Ошибка при загрузке данных");
        }

        const albums = await response.json();

        dataContainer.innerHTML = "";
        albums.forEach((album) => {
            const li = document.createElement("li");
            li.textContent = album.title;
            dataContainer.appendChild(li);
        });
    } catch (error) {
        dataContainer.innerHTML =
            "Произошла ошибка в получении данных об альбомах...";
    } finally {
        loader.hidden = true;
    }
}

renderAlbums();
