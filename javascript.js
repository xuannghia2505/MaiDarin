let flag = false;

function batdau() {
    document.getElementById("phan2").removeAttribute("hidden")
    document.getElementById("phan1").setAttribute("hidden",true)
    document.getElementById("audio").play();
}

function startFunction() {
    document.getElementById("content").removeAttribute("hidden")
    document.getElementById("firstPage").setAttribute("hidden",true)
}
