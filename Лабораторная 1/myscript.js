var title = document.getElementById('myTitle');
var button = document.getElementById('myButton');
// var logo = document.getElementById('headerLogo');
var modal = document.getElementById('myModal');
var close = document.getElementById('myClose');
var test = document.getElementById('test');
var content = document.getElementById('myContent');
var headerMenu = document.getElementById('headerMenu')
var menuTrigger = document.getElementById('menuTrigger')

menuTrigger.onclick = function() {
    $("#headerMenu").slideToggle(500);
}
$("#headerMenu a").click(function() {
    if (headerMenu.style.display === "block") {
        $("#headerMenu").slideUp(500);
}})
// button.onclick = function() {
//     title.style.color = "red";
// }

// title.onclick = function() {
//     title.style.color = "black";
// }

// logo.onmouseenter = function() {
//     logo.style.fontSize = "60px";
// }

// logo.onmouseleave = function() {
//     logo.style.fontSize = "";
// }

function opacity1() {
    content.style.opacity = "1";
}

button.onclick = function() {
    modal.style.display = "block";
    // content.style.opacity = "1";
    setTimeout(opacity1, 100);
}

function none() {
    modal.style.display = "none";
}

close.onclick = function() {
    content.style.opacity = "0";
    setTimeout(none, 1000);
}

// test.onclick = function() {
//     test.style.backgroundColor = "red";
//     test.style.marginLeft = "100px"
//     test.style.marginTop = "100px"
// }


