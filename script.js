var links = document.getElementsByTagName("a");
var topSlider = document.getElementById("topslider");
var bottomSlider = document.getElementById("bottomslider");
var topBar = document.getElementById("header_pad");
var bottomBar = document.getElementById("bottom_bar");
var resetButton = document.getElementById("reset");

var icons = document.getElementsByClassName("icons");
var iconStates = [true, true, true, true, true];

var flipIcon = function(icon) {
    return function() {
        iconStates[icon] = !(iconStates[icon]);
        icons[icon].src = "icons/" + icons[icon].id + "_gloss" + (iconStates[icon] ? "" : "_perspective") + ".png";
    }
}

var adjustTopHeight = function() {
    return function() {
        topBar.height = topSlider.value;
    }
}

var adjustBottomHeight = function() {
    return function() {
        bottomBar.height = bottomSlider.value;
    }
}

var resetHeights = function() {
    return function() {
        topSlider.value = 32;
        bottomSlider.value = 575;
        topBar.height = 32;
        bottomBar.height = 575;
    }
}

for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener("mouseover", flipIcon(i));
    icons[i].addEventListener("mouseout", flipIcon(i));
}

for (let i = 0; i < links.length; i++) {
    links[i].target = "_blank";
}

topSlider.addEventListener("input", adjustTopHeight());
bottomSlider.addEventListener("input", adjustBottomHeight());
resetButton.addEventListener("click", resetHeights());
