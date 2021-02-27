var opacity = 0;
function hide(){
    var loader= document.querySelector(".loader-wrapper");
    opacity = Number(window.getComputedStyle(loader, null).getPropertyValue("opacity"));
    if(opacity > 0){
        opacity = opacity - 1;
        loader.style.opacity = opacity;
    }
}
window.addEventListener("load", hide());