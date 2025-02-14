const menuMobile = document.getElementById("menu-mobile");

menuMobile.addEventListener("click", function() {
    this.classList.toggle("active");
    const ul = document.getElementById("ul");
    ul.classList.toggle("active");
})