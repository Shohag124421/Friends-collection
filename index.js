/* ==========================DOM elements========================== */

const btn = document.getElementById('btn');
const closeBtn = document.getElementById('close');
const hide = document.getElementById('hide');
const logIn = document.getElementById('logIn');
const signUp = document.getElementById('signUp');
const cart = document.getElementById('cart');
const menuBtn = document.getElementById('menuBtn');
const catBtn = document.getElementById("category");
const catList = document.getElementById("cat-list");
const searchBox = document.getElementById('searchBox');
const searchBtn = document.getElementById('searchBtn');

/* ==========================Toggle login========================== */

function setActiveTab(active) {
    if (active === 'login') {
        logIn.style.display = 'flex';
        signUp.style.display = 'none';
    } else {
        logIn.style.display = 'none';
        signUp.style.display = 'flex';
    }
}

btn.addEventListener('click', () => {
    btn.style.display = 'none';
    closeBtn.style.display = 'flex';
    hide.style.display = 'flex';
    setActiveTab('login');
});

closeBtn.addEventListener('click', () => {
    btn.style.display = 'flex';
    closeBtn.style.display = 'none';
    hide.style.display = 'none';
});

document.querySelectorAll('#log-in, #sign-up').forEach(el => {
    el.addEventListener('click', (e) => {
        if (e.target.id === 'log-in') setActiveTab('login');
        if (e.target.id === 'sign-up') setActiveTab('signup');
    });
});

/* ==========================Password eye toggle========================== */

document.querySelectorAll('.eye').forEach(icon => {
    icon.addEventListener('click', () => {
        const input = icon.previousElementSibling;
        if (input.type === 'password') {
            input.type = 'text';
            icon.classList.add('fa-eye-slash');
            icon.classList.remove('fa-eye');
        } else {
            input.type = 'password';
            icon.classList.add('fa-eye');
            icon.classList.remove('fa-eye-slash');
        }
    });
});

/* ==========================toggle categories========================== */ 

/* ==========================Load Admin Photos========================== */

// Target the category box on index page
const categoryBox = document.getElementById("categories");

// Load categories from localStorage
let categories = JSON.parse(localStorage.getItem("categories")) || [];

// Show category items
function displayCategories() {
    categoryBox.innerHTML = ""; // Clear previous

    categories.forEach(cat => {
        const card = document.createElement("div");
        card.classList.add("category-card");

        card.innerHTML = `
            <img src="${cat.image}" alt="${cat.name}" />
            <p>${cat.name}</p>
        `;

        categoryBox.appendChild(card);
    });
}

displayCategories();

/* ==========================Load Admin Photos========================== */



/* ================== Product Slider =================== */

const scrollContainer = document.getElementById("productList");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

rightBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft += 250;
});

leftBtn.addEventListener("click", () => {
    scrollContainer.scrollLeft -= 250;
});

setInterval(() => {
    scrollContainer.scrollLeft += 2;
}, 30);
