document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("hidden");
});

document.getElementById("close-btn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("hidden");
});