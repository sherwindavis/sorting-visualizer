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
c.fillStyle= '#80deea';
c.strokeStyle='#ffffff';
c.fillRect(gap,0,10,arr[i]);
c.strokeRect(gap,0,10,arr[i]);
}
}

function clear(){
    array.length = 0;
}

function bubblesort(arr2){
       var i, j, stop;
       var len = arr2.length;
    for (i=0; i < len; i++){
        console.log(arr2[i]);
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr2[j+1]){
                var temp = arr2[j];
                arr2[j] = arr2[j+1];
                arr2[j+1] = temp;
                
            }
        }
        draw(arr);       
}
}

function quicksort(arr2) {
	if (arr2.length <= 1) { 
		return arr2;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = arr2.pop();
		var length = arr2.length;

		for (var i = 0; i < length; i++) {
			if (arr2[i] <= pivot) {
				left.push(arr2[i]);
			} else {
				right.push(arr2[i]);
			}
		}

		arr= newArray.concat(quicksort(left), pivot, quicksort(right));
        draw(arr);     
    }
    
}

function mergeSort(arr2) {
    const half = arr2.length / 2
    if(arr2.length < 2){
      return arr 
    }    
    const left = arr2.splice(0, half)
    return merge(mergeSort(left),mergeSort(arr2))
  }


  function merge(left, right) {
    let arr = []
     while (left.length && right.length) {        
        if (left[0] < right[0]) {
            arr.push(left.shift())  
        } else {
            arr.push(right.shift()) 
        }
    }
    draw(arr2);
}