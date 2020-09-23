//获取：menu菜单按钮实例
const headerEl = document.querySelector("header")
const burgerEl = document.querySelector(".burger")
const coverEl = document.querySelector(".cover")
const navEl = document.querySelector(".navigator")
burgerEl.addEventListener("click", () => {
    if (headerEl.classList.contains("open")) {
        headerEl.classList.remove("open");
        headerEl.classList.add("close");
    } else {
        headerEl.classList.remove("close");
        headerEl.classList.add("open");
    }
    // headerEl.classList.toggle("open");
    if (coverEl.classList.contains("cover-show")) {
        coverEl.classList.remove("cover-show");
        coverEl.classList.add("cover-hide");
    } else {
        coverEl.classList.remove("cover-hide");
        coverEl.classList.add("cover-show");
    }
    // coverEl.classList.toggle("cover-show");
    navEl.classList.toggle("cl-effect-1");


})

function jump() {
    window.location.href = "menu.html";
}