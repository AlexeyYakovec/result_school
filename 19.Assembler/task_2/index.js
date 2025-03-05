/*

С инициализацией проекта на rollup.js вы справились успешно. 
Вся команда разработки довольна вами, потому что все теперь могут начать реализовывать функционал.

Ваш начальник понял, что вы достаточно хороший разработчик, и поэтому просит тебя помочь инициализировать еще один проект. 
Только дело в том, что требование у заказчика стоит следующее: необходимо использовать только Webpack.

Сейчас ваша задача состоит в том, чтобы из пустой папки инициализировать проект при помощи Webpack.

В папке проекта создайте 3 файла: index.html, index.css и index.js. Добавьте в index.html базовую разметку HTML. 
После создайте файл package.json при помощи команды npm init -y. Также в index.js добавьте строчку кода:

console.log('Hello World!');
Теперь, руководствуясь документацией Webpack: ссылка, видео с уроком, 
установите Webpack как пакет и создайте конфигурационный файл webpack.config.js.

В webpack.config.js добавьте базовую конфигурацию для запуска проекта. 
Для этого хватит свойств entry, output и mode. Никаких плагинов пока не добавляйте.

После в файл package.json добавьте команду "start": "webpack --config webpack.config.js".

Затем запустите команду "start". У вас должен сгенерировать JS-файл, 
название которого вы указывали в свойстве output в файле webpack.config.js. Если файл не сгенерировался, то, возможно, 
вы сделали что-то не так и у вас возникла ошибка. В данном случае вам нужно найти ее и исправить.

*/

const heading = document.createElement("h1");
heading.textContent = "I love JavaScript";

const image = document.createElement("img");
image.src = "assets/Unofficial_JavaScript_logo_2.svg.png";
image.alt = "JavaScript Logo";

document.body.appendChild(heading);
document.body.appendChild(image);
