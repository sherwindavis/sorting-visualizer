array=[];
var arr2;

function init(){
clear();
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var hsize = 400;
var wsize = 650;
canvas.style.width = wsize + "px";
canvas.style.height = hsize + "px";
var scale = 2; 
canvas.width = Math.floor(wsize * scale);
canvas.height = Math.floor(hsize * scale);
c.clearRect(0, 0, canvas.width, canvas.height);
c.scale(scale, scale)
var array=randarray();
window.arr =array;
window.arr2=array;
draw(arr);

}

function randarray()
{
    var no = document.getElementById("barnos").value
    for(i=0;i<no;i++)
{
array[i]=Math.floor((Math.random() * 300) + 1);;
}
return array;
}

function draw(arr){
var no = document.getElementById("barnos").value
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

var hsize = 400;
var wsize = 650;
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
c.fillStyle= '#7C4DFF';
c.strokeStyle='#ffffff';
hght=arr[i];
bott=400-hght
c.fillRect(gap,bott,10,hght);
c.strokeRect(gap,bott,10,hght);

}
}

function clear(){
    array.length = 0;
}

function bubblesort(arr2){
       var i, j, stop;
       var len = arr2.length;
    for (i=0; i < len; i++){
        
        for (j=0, stop=len-i; j < stop; j++){
            if (arr2[j] > arr2[j+1]){
                var temp = arr2[j];
                arr2[j] = arr2[j+1];
                arr2[j+1] = temp;
                
            }
        }
        draw(arr2);       
}
}
