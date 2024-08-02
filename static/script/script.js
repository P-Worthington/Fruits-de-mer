function changeMenu(x) {
    x.classList.toggle("change");
}

$(document).ready(function(){
    $("#burgerIcon").click(function(){
        $("#navContainer").slideToggle(400);
    });
});