let menuBtn = document.getElementById("menu-btn");
let primaryNavigation = document.getElementById("primary-navigation");

console.log(menuBtn);
console.log(primaryNavigation);

menuBtn.addEventListener("click", ()=>{
    primaryNavigation.classList.toggle("display")
})