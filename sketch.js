function init(){
var no = document.getElementById("barnos").value
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var gap=10;
c.clearRect(0, 0, canvas.width, canvas.height);
for(i=0;i<no;i++)
{
gap=gap+3
c.fillStyle= 'white';
c.strokeStyle='black';
var randheight = random()
c.strokeRect(gap,20,2,randheight);
c.fillRect(gap,20,2,randheight);
}
function random(){
    return Math.floor((Math.random() * 100) + 1);
}
}