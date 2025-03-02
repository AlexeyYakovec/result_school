function getFastestLoadedPhoto(ids) {
    const dataContainer = document.getElementById("data-container");
    const loader = document.getElementById("loader");

    loader.hidden = false;

    const photoPromises = ids.map((id) =>
        fetch(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Photo with id ${id} not found`);
                }
                return response.json();
            })
            .then((data) => data.photo),
    );

    Promise.race(photoPromises)
        .then((photo) => {
            dataContainer.innerHTML = `
            <li class="photo-item">
              <img class="photo-item__image" src="${photo.url}">
              <h3 class="photo-item__title">${photo.title}</h3>
            </li>
          `;
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

getFastestLoadedPhoto([60, 12, 55]);
