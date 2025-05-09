(function () {
	'use strict';

	/*

	Подключение стилей
	Работа с картинками
	Поддержка кода другими браузерами
	Запуск проекта на локальном сервере (localhost)
	Поэтому сейчас вы этим и займетесь. Необходимо установить несколько плагинов в "devDependencies":

	Для подключения стилей используйте «rollup-plugin-styles»: ссылка
	Для работы с картинками «@rollup/plugin-image»: ссылка
	Для того чтобы переводить JavaScript в код, который поддерживают даже старые браузеры, используйте «@rollup/plugin-babel»: ссылка вместе с пресетом @babel/preset-env: ссылка
	Для запуска проекта на локальном сервере вам понадобятся плагины «rollup-plugin-serve»: ссылка и «rollup-plugin-livereload»: ссылка
	После создайте папку assets и добавьте в нее любую картинку с изображением языка программирования JavaScript. Теперь в index.js файле вам необходимо добавить в DOM два элемента:

	<h1>. В данном элементе должна быть надпись: “I love JavaScript”
	<img>. Данный элемент должен отображать картинку из папки assets
	Кроме этого, в index.css добавьте любые стили на свой вкус. Главное, чтобы данный файл не был пустым.

	После в файл package.json добавьте еще один скрипт:

	"start": "rollup -c -w”
	и запустите команду npm run start или просто (npm start). Также при помощи тега <script> подключите сгенерированный Rollup JS-файл в index.html.

	В итоге у вас должна отобразиться картинка, примениться все стили, и должен открыться локальный сервер. 
	Если что-то пошло не так, то, возможно, у вас возникла ошибка. В данном случае вам нужно найти ее и исправить.

	*/

	const heading = document.createElement("h1");
	heading.textContent = "I love JavaScript";

	const image = document.createElement("img");
	image.src = "assets/Unofficial_JavaScript_logo_2.svg.png";
	image.alt = "JavaScript Logo";

	document.body.appendChild(heading);
	document.body.appendChild(image);

})();
