// Items 
var menuItems = document.getElementById("MenuItems");
var tshirt = document.getElementById("shirt");
var mug = document.getElementById("mug");
var tumbler = document.getElementById("tumbler");    
var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");

menuItems.style.maxHeight = "0px";

// Menu Toggle
function menuToggle() {
    if (menuItems.style.maxHeight == "0px") {
        menuItems.style.maxHeight = "200px";
    }
    else {
        menuItems.style.maxHeight = "0px"; 
    }
}

function register() {
    RegForm.style.transform = "translateY(0px)";
    LoginForm.style.transform = "translateX(0)";
    Indicator.style.transform = "translateX(100px)";
}
function login() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}

// Changing Pages
function changeTShirt() {
    window.location.href = "shirt.html"
}

function changeMug() {
    window.location.href = "mug.html"
}

function changeTumbler() {
    window.location.href = "tumbler.html"
}

function goToCart() {
    window.location.href = "cart.html"
}
