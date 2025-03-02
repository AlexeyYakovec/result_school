document.addEventListener("DOMContentLoaded", function () {
    const dataContainer = document.getElementById("data-container");
    const loader = document.getElementById("loader");

    loader.hidden = false;

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((users) => {
            dataContainer.innerHTML = "";
            users.forEach((user) => {
                const li = document.createElement("li");
                const a = document.createElement("a");
                a.href = "#";
                a.textContent = user.name;
                li.appendChild(a);
                dataContainer.appendChild(li);
            });
        })
        .catch((error) => {
            console.error(
                "There was a problem with the fetch operation:",
                error,
            );
        })
        .finally(() => {
            loader.hidden = true;
        });
});
