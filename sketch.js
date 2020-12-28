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
    var no = document.getElementById("customRange3").value
    for(i=0;i<no;i++)
{
array[i]=Math.floor((Math.random() * 300) + 1);;
}
return array;
}

function draw(arr){
var no = document.getElementById("customRange3").value
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
c.fillStyle= '#EAEAEA';
c.strokeStyle='#EAEAEA';
hght=arr[i];
bott=400-hght
c.fillRect(gap,bott,8,hght);
c.strokeRect(gap,bott,8,hght);

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

function quicksortcall(arr)
{
    originalArr =[];
    originalArr = arr2;
    arr2= quickSort(originalArr);
    draw(arr2);
}


function quickSort(originalArr) {
    if (originalArr.length <= 1) {
       return originalArr;
       } else {
             var leftArr = [];              
             var rightArr = [];
             var newArr = [];
             var pivot = originalArr.pop();      
             var length = originalArr.length;
             for (var i = 0; i < length; i++) {
                if (originalArr[i] <= pivot) {    
                   leftArr.push(originalArr[i]);      
             } else {
                     rightArr.push(originalArr[i]);
           }
         }
       return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));                                                                            //returned untill sorting occurs
    }
 }


 function mSort (arr) {
    if (arr.length === 1) {
    return arr                            // return once we hit an array with a single item
 }
 const middle = Math.floor(arr.length / 2) // get the middle item of the array rounded down
 const left = arr.slice(0, middle)         // items on the left side
 const right = arr.slice(middle)           // items on the right side
 //document.write(middle);
 return merge(mSort(left),mSort(right)
 )
 }

 function merge (left, right) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while (leftIndex < left.length && rightIndex < right.length) {
       if (left[leftIndex] < right[rightIndex]) {
       result.push(left[leftIndex])
       leftIndex++
      // document.write("</br>");        
       } else {
       result.push(right[rightIndex])
       rightIndex++      
    }
 }
 arr  = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
 draw(arr);
 return arr;
}
