document.getElementById("button_up").onclick = function scrollUpFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function() {scrollFunction()}

function scrollFunction (){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("button_up").style.display = "block";   
    }
    else {
        document.getElementById("button_up").style.display = "none";
    }
}