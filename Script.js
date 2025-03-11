let panier = JSON.parse(localStorage.getItem("panier")) || [];

function ajouterAuPanier(nom,prix) {
    panier.push({nom,prix});
    localStorage.setItem("panier", JSON.stringify(panier));
    mettreAJourPanier();
}

function mettreAJourPanier() {
    let cartCount = document.getElementByID("cart-count");
    cartCount.textContent = panier.length;
}

document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

window.onload = function() {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
    mettreAJourPanier();
};
f