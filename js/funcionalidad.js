window.onscroll = function() {
    console.log(document.documentElement.scrollTop);
    if(document.documentElement.scrollTop > 100) {
        document.querySelector(".go-top-container").classList.add("show");
    } 
    else {
        document.querySelector(".go-top-container").classList.remove("show"); 
    }
}

document.querySelector(".go-top-container").addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

function Mycolor() {
    var imagen = document.getElementById("cue");
    imagen.style.backgroundImage="url('imagenes/color.jpg')";
    }

function Mycolor2() {
    var imagen = document.getElementById("cue");
    imagen.style.backgroundImage="url('css/fond1.jpg')"; 
}



   