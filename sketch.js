array=[];
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
array=randarray();
draw(array);
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

function draw(array){
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
i=0;
var l=0;
for(i=0;i<no;i++)
{
l=l+1;
gap=gap+10
c.fillStyle= '#80deea';
c.strokeStyle='#ffffff';
c.fillRect(gap,0,10,array[i]);
c.strokeRect(gap,0,10,array[i]);
}
}

function clear(){
    array.length = 0;
}

function bubblesort(array){
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
    c.clearRect(0, 0, canvas.width, canvas.height);
    var len = array.length,
       i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (array[j] > array[j+1]){
                swap(array, j, j+1);
            }
        }
}
draw(array);
}



function swap(array, first_Index, second_Index){
    var temp = array[first_Index];
    array[first_Index] = array[second_Index];
    array[second_Index] = temp;
    c.fillRect(gap,0,10,array[first_Index]);
    c.strokeRect(gap,0,10,array[first_Index]);
    c.fillRect(gap,0,10,array[second_Index]);
    c.strokeRect(gap,0,10,array[second_Index]);    
}


