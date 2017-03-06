var clear = document.getElementById("clear");
var svg = document.getElementById("savage");
var currentX;
var currentY;


svg.addEventListener("mousemove", function(e){
    currentX = e.offsetX;
    currentY = e.offsetY;
});

var clearSVG = function() {
    while (svg.hasChildNodes()) {
        svg.removeChild(svg.lastChild);
    }
};

var connectTheDots = function(e) {
  if(svg.hasChildNodes()) {

  }
};
clear.addEventListener("click", clearSVG);