function getUsersByIds(ids) {
    const dataContainer = document.getElementById("data-container");
    const loader = document.getElementById("loader");

    loader.hidden = false;

    const userPromises = ids.map((id) =>
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(
            (response) => {
                if (!response.ok) {
                    throw new Error(`User with id ${id} not found`);
                }
                return response.json();
            },
        ),
    );

    Promise.all(userPromises)
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
}

getUsersByIds([5, 6, 2, 1]);
