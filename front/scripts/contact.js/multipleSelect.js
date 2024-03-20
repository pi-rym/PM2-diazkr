const selectBtn = document.querySelector(".select-btn"),
    items = document.querySelectorAll(".item")

let selectedGenres = [];

selectBtn.addEventListener("click", () => {
    selectBtn.classList.toggle("open");
});

items.forEach(item => {
    item.addEventListener("click", () => {
        item.classList.toggle("checked");

        const value = item.getAttribute("data-value");

        if (item.classList.contains("checked")) {
            selectedGenres.push(value);
        } else {
            selectedGenres = selectedGenres.filter(genre => genre !== value);
        }

        let btnText = document.querySelector(".btn-text");

        if (selectedGenres.length > 0) {
            btnText.innerText = `${selectedGenres.length} Seleccionado`;
        } else {
            btnText.innerText = "Seleciona el genero";
        }
    });
});


const arrayGenre = () => {
    return selectedGenres;
}

const clearSelection = () => {
    items.forEach(item => {
        if (item.classList.contains("checked")) {
            item.classList.remove("checked");
        }
    });
    selectedGenres = [];
    document.querySelector(".btn-text").innerText = "Seleciona el genero";
}

module.exports = {
    arrayGenre,
    clearSelection
}
