const selectBtnRate = document.querySelector(".select-btn-rate"),
    itemsRate = document.querySelectorAll(".item-rate")

selectBtnRate.addEventListener("click", () => {
    selectBtnRate.classList.toggle("open");
});

itemsRate.forEach(itemRate => {
    itemRate.addEventListener("click", () => {
        itemsRate.forEach(otherItemRate => {
            if (otherItemRate !== itemRate) {
                otherItemRate.classList.remove("checked");
            }
        });
        itemRate.classList.toggle("checked");

        let checkedRate = [...itemsRate].find(item => item.classList.contains("checked")),
            btnTextRate = document.querySelector(".btn-text-rate");

        if (checkedRate) {
            btnTextRate.innerText = `Seleccionado`;
        } else {
            btnTextRate.innerText = "Seleciona el puntaje";
        }
    });
});

const obtenerRate = () => {
    let selectedValue = null;
    itemsRate.forEach(itemRate => {
        if (itemRate.classList.contains("checked")) {
            selectedValue = parseInt(itemRate.getAttribute("data-value"));
        }
    });
    return selectedValue;
};

const clearRateSelection = () => {
    itemsRate.forEach(itemRate => {
        if (itemRate.classList.contains("checked")) {
            itemRate.classList.remove("checked");
        }
    });
    document.querySelector(".btn-text-rate").innerText = "Selecciona el puntaje";
};



module.exports = {
    obtenerRate,
    clearRateSelection
}

