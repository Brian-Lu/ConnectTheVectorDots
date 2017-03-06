var clearbtn = document.getElementById("clear");
var svg = document.getElementById("savage");
var currentX = -22;
var currentY = -22;

var clearStuff = function(e) {
    currentX = -1;
    currentY = -1;
    while(svg.lastChild) {
        svg.removeChild(svg.lastChild);
    }
};
clearbtn.addEventListener("click", clearStuff);

var addStuff = function(e) {
    if (currentX < 0) {
	    currentX = e.offsetX;
	    currentY = e.offsetY;
    }
    var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", currentX);
    line.setAttribute("y1", currentY);
    currentX = e.offsetX;
    currentY = e.offsetY;
    line.setAttribute("x2", currentX);
    line.setAttribute("y2", currentY);
    line.setAttribute("style", "stroke:grey;stroke-width:1");
    svg.appendChild(line);
    c.setAttribute("cx", currentX);
    c.setAttribute("cy", currentY);
    c.setAttribute("r", 10);
    c.setAttribute("stroke","grey");
    c.setAttribute("stroke-width",1);
    c.setAttribute("fill", "grey");
    svg.appendChild(c);
};
svg.addEventListener("click", addStuff);
