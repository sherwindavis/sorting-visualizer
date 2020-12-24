function init(){
var no = document.getElementById("barnos").value
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var hsize = 400;
var wsize = 800;
canvas.style.width = wsize + "px";
canvas.style.height = hsize + "px";
var scale = 2; 
canvas.width = Math.floor(wsize * scale);
canvas.height = Math.floor(hsize * scale);
var gap=0;
c.clearRect(0, 0, canvas.width, canvas.height);
c.scale(scale, scale)
for(i=0;i<no;i++)
{
gap=gap+10
c.fillStyle= 'white';
c.strokeStyle='black';
var randheight = random()
c.fillRect(gap,0,10,randheight);
c.strokeRect(gap,0,10,randheight);

}
function random(){
    return Math.floor((Math.random() * 250) + 1);
}
}
