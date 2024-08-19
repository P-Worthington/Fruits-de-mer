function changeMenu () {
    var y = document.getElementById("burgerIcon");
    y.classList.toggle("change");
    $("#navContainer").slideToggle(400);
    $("#hiddenCover").slideToggle(100);
}

window.onscroll = () => {
    x = document.getElementsByClassName("change").length
    if (x === 1) {
        var y = document.getElementById("burgerIcon");
        y.classList.remove("change");
        $("#navContainer").slideToggle(400);
        $("#hiddenCover").slideToggle(100);
    }
}
