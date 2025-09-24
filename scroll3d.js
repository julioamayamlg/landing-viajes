window.onscroll = function(){
    let cube = document.getElementById("cube");
    cube.style.transform = "rotateY(" + window.scrollY/4 + "deg) rotateX(" + window.scrollY/4 + "deg)" ;
}
