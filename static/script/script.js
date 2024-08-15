function changeMenu() {
    var y = document.getElementById("burgerIcon")
    y.classList.toggle("change");
}

$("#burgerIcon").click(function () {
    changeMenu();
})

$(document).ready(function slideMenu (){
    $("#burgerIcon").click(function(){
        $("#navContainer").slideToggle(400);
    });
});

xy = $(".change")
console.log(xy.length)