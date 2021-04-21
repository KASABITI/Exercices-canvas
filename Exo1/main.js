// var canvas = document.getElementById('canvas');
// var ctx = canvas.getContext('2d');
// ctx.beginPath();
// ctx.fillStyle = 'green';
// ctx.fillRect(110, 100, 250, 60 );
// ctx.beginPath();
// ctx.fillRect(40, 160, 400, 60 );
// ctx.beginPath();
// ctx.arc(100, 250, 30, 0, 2 * Math.PI);
// ctx.fillStyle = 'grey';
// ctx.fill();
// ctx.stroke();
//rect 1
var canvas = document.getElementById("canvas1");
var contexte = canvas.getContext("2d");
contexte.fillStyle ='green';
contexte.fillRect(110,100,280,80);
//rect 2
var canvasRect = document.getElementById("canvas1");
var contexte = canvasRect.getContext("2d");
contexte.fillRect(25,180,450,75);
//rond 1
var canvasCircle1 =document.getElementById("canvas1");
var contexteCircle = canvasCircle1.getContext("2d");
contexteCircle.beginPath();
contexteCircle.lineWidth ='5';
contexteCircle.fillStyle='gray';
contexteCircle.arc(60,295,40,0,2*Math.PI);
contexteCircle.fill();
//rond 2
var canvasCircle1 =document.getElementById("canvas1");
var contexteCircle = canvasCircle1.getContext("2d");
contexteCircle.beginPath();
contexteCircle.lineWidth ='5';
contexteCircle.fillStyle='gray';
contexteCircle.arc(440,295,40,0,2*Math.PI);
contexteCircle.fill();
