window.addEventListener("resize", hidesocbg);
function hidesocbg() {
    const docsize = window.matchMedia("(max-width: 640px)")
    var cont2 = document.getElementById("container2")
    var socbg = document.getElementById("socbg")
    var cont1 = document.getElementById("container1")
    if (docsize.matches) {
        // $(".socbg").appendTo(".container2");
        cont2.appendChild(socbg)

    }
    else {
        // $(".socbg").appendTo(".container1");
        cont1.appendChild(socbg)
    }
}
