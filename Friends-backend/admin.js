const categoriesDiv = document.getElementById("categories");
const addBtn = document.getElementById("addProductBtn");

function loadAdminPhotos() {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    categoriesDiv.innerHTML = "<h3>Product Category</h3>";

    products.forEach((p, index) => {
        const box = document.createElement("a");
        box.href = "#";
        box.innerHTML = `
            <img src="${p.photo}" alt="${p.name}">
            <span>${p.name}</span>
            <button onclick="removeProduct(${index})">X</button>
        `;
        categoriesDiv.appendChild(box);
    });
}

function removeProduct(index) {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(products));
    loadAdminPhotos();
}

addBtn.addEventListener("click", () => {
    const nameInput = document.getElementById("productName");
    const imageInput = document.getElementById("productImage");

    if (!nameInput.value) {
        alert("Please provide product name!");
        return;
    }
    if (!imageInput.files || imageInput.files.length === 0) {
        alert("Please select an image!");
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        let products = JSON.parse(localStorage.getItem("products")) || [];
        products.push({
            name: nameInput.value,
            photo: e.target.result
        });
        localStorage.setItem("products", JSON.stringify(products));
        nameInput.value = "";
        imageInput.value = "";
        loadAdminPhotos();
    }
    reader.readAsDataURL(imageInput.files[0]);
});

// Load products on page start
loadAdminPhotos();
