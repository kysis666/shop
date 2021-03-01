var hot = document.getElementById("hot");
var sale = document.getElementById("sale");
var trending = document.getElementById("trending");
var neww = document.getElementById("new");

var buttonhot = document.getElementById("buttonhot");
var buttonsale = document.getElementById("buttonsale");
var buttontrending = document.getElementById("buttontrending");
var buttonnew = document.getElementById("buttonnew");


function fhot(){
    hot.style.display = "flex";
    sale.style.display = "none";
    trending.style.display = "none";
    neww.style.display = "none";

    buttonhot.style.color = "red";
    buttonsale.style.color = "black";
    buttontrending.style.color = "black";
    buttonnew.style.color = "black";
}

function fsale(){
    hot.style.display = "none";
    sale.style.display = "flex";
    trending.style.display = "none";
    neww.style.display = "none";

    buttonhot.style.color = "black";
    buttonsale.style.color = "red";
    buttontrending.style.color = "black";
    buttonnew.style.color = "black";
}

function ftrending(){
    hot.style.display = "none";
    sale.style.display = "none";
    trending.style.display = "flex";
    neww.style.display = "none";

    buttonhot.style.color = "black";
    buttonsale.style.color = "black";
    buttontrending.style.color = "red";
    buttonnew.style.color = "black";
}

function fnew(){
    hot.style.display = "none";
    sale.style.display = "none";
    trending.style.display = "none";
    neww.style.display = "flex";

    buttonhot.style.color = "black";
    buttonsale.style.color = "black";
    buttontrending.style.color = "black";
    buttonnew.style.color = "red";
}

document.getElementById("column-sale").innerHTML += '<h3>Sale!</h3>';
