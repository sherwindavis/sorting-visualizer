var array=[];
var wsize = Math.floor(0.8*window.innerWidth);
var hsize = 400;
var barcord= Math.floor(wsize/100);
var ms=document.getElementById("customRange2").value;
var canvas = document.getElementById("canvas")
var c = canvas.getContext("2d");
canvas.style.width = wsize+"px";
canvas.style.height = hsize+"px";
var scale = 2; 
canvas.width = Math.floor(wsize * scale);
canvas.height = Math.floor(hsize * scale);
c.scale(scale, scale);

function init(){
clearall();
c.clearRect(0, 0, canvas.width, canvas.height);
array=randarray();
draw(array);
}

function randarray()
{
    var no = document.getElementById("customRange3").value
    for(i=0;i<no;i++)
{
array[i]=Math.floor((Math.random()*300) + 1);
}
return array;
}

function draw(array){
var no = document.getElementById("customRange3").value
var gap=0;
c.clearRect(0, 0, canvas.width, canvas.height);
for(i=0;i<no;i++)
{
c.fillStyle= '#EAEAEA'
c.strokeStyle='#EAEAEA';
hght=array[i];
bott=hsize-hght;
barwidth=(barcord)-2;
c.fillRect(gap,bott,barwidth,hght);
gap=gap+(barcord);

}
}

function visualize(first,second,color){   

    hghtone=array[first];
    bott=hsize-hghtone;
    barwidth=barcord-2;
    c.clearRect(first*barcord,0, barwidth+2, 800);
    c.fillStyle= color;
    c.strokeStyle=color;   
    c.fillRect(first*barcord,bott,barwidth,hghtone);

    hghttwo=array[second];
    bott=hsize-hghttwo;
    c.clearRect(second*barcord,0, barwidth+2, 800);
    c.fillStyle= color;
    c.strokeStyle=color;   
    c.fillRect(second*barcord,bott,barwidth,hghttwo);
    

}

function clearall(){
    array.length = 0;
}
function speed(){
     ms = document.getElementById("customRange2").value

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function swapp(array, first_Index, second_Index){
    var temp = array[first_Index];
    array[first_Index] = array[second_Index];
    array[second_Index] = temp;
  }

 async function bubblesort(array){
       var i, j, stop;
       var len = array.length;
    for (i=0; i < len; i++){
        
        for (let j=0, stop=len-i; j < stop; j++){
            if (array[j] > array[j+1]){                     
            await swapp(array,j,j+1);   
            visualize(j,j+1,"#25d78d");
            await sleep(ms);
            visualize(j,j+1,"#EAEAEA");
            }

            else {
                visualize(j,j+1,"#ff2934");
                await sleep(ms);
                visualize(j,j+1,"#EAEAEA");
            }

            
            

        }
      
}
}

  

 async function quicksortcall(arr2)
 {
     originalArr =[];
     originalArr = arr2;
     arr2= quickSort(originalArr);
     console.log(originalArr)
     
 }
 
 async function quickSort(originalArr) {
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



//  function mSort (arr) {
//     if (arr.length === 1) {
//     return arr                            
//  }
//  const middle = Math.floor(arr.length / 2)
//  const left = arr.slice(0, middle)
//  const right = arr.slice(middle)
//  return merge(mSort(left),mSort(right)
//  )
//  }

//  function merge (left, right) {
//     let result = []
//     let leftIndex = 0
//     let rightIndex = 0
//     while (leftIndex < left.length && rightIndex < right.length) {
//        if (left[leftIndex] < right[rightIndex]) {
//        result.push(left[leftIndex])
//        leftIndex++      
//        } else {
//        result.push(right[rightIndex])
//        rightIndex++      
//     }
//  }
//  arr  = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
//  draw(arr);
//  return arr;
 //}
