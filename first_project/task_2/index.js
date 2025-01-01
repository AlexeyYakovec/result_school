console.log("Запускаем таймер");

for (let i = 5; i >= 0; i--) {
    setTimeout(() => {
        alert(i);
    }, 1000);
}
