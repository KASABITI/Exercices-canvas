var canvasHouse = document.getElementById("canvas");
var contexteLine = canvasHouse.getContext("2d");
contexteLine.fillStyle = "blue";

contexteLine.beginPath();
contexteLine.moveTo(200, 50);
contexteLine.lineTo(400, 200);
contexteLine.lineTo(20, 200);
contexteLine.fill();

var canvas = document.getElementById("canvas");
var contexte = canvas.getContext("2d");
contexte.fillStyle ='#a1d8e6';
contexte.fillRect(20,200,380,400);

var canvasWindow1 = document.getElementById("canvas");
var contexte1 = canvasWindow1 .getContext("2d");
contexte1.fillStyle ='#c9c9c9';
contexte1.fillRect(40,240,60,60);

var canvasWindow2 = document.getElementById("canvas");
var contexte2 = canvasWindow2 .getContext("2d");
contexte2.fillStyle ='#c9c9c9';
contexte2.fillRect(320,240,60,60);

var canvasWindow3 = document.getElementById("canvas");
var contexte3 = canvasWindow3 .getContext("2d");
contexte3.fillStyle ='#c9c9c9';
contexte3.fillRect(170,450,80,150);
