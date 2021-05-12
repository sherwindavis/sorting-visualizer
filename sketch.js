var array=[];
var wsize = Math.floor(0.9*window.innerWidth);
var hsize = Math.floor(0.6*window.innerHeight);
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


function darkmode(){
    var mode= document.getElementById("flexSwitchCheckDefault");
    var card= document.getElementById("card")
  var cardbody= document.getElementById("card-body")
  var nav1= document.getElementById("nav1")
  var navbarbrand = document.getElementById("navbarbrand")

    switch (mode.value){
        case"off":
  
  card.style.backgroundColor="#404040"
  cardbody.style.backgroundColor="#404040"
  cardbody.style.color="white";  
  nav1.style.backgroundColor="#404040"
  nav1.style.color="white"  
  navbarbrand.style.color = "white";
  document.body.style.backgroundImage = "linear-gradient(to right,#121212,#121212)";
  mode.value="on";
  break;

        case"on":     
        card.style.backgroundColor="white"
        cardbody.style.backgroundColor="white"
        cardbody.style.color="black";        
        nav1.style.backgroundColor="white"
        nav1.style.color="black"       
        navbarbrand.style.color = "black";
        document.body.style.backgroundImage = "linear-gradient(to right,#25a7d7, #2962FF)";
        mode.value="off"
        break;

    }
}

function init(){
clearall();
c.clearRect(0, 0, canvas.width, canvas.height);
array=randarray();
draw(array);
}
function updateTextInput() {
    let count= document.getElementById('meter');
    count.innerHTML=document.getElementById("customRange3").value;
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
     ms = document.getElementById("customRange2").value;
     var speedcount=document.getElementById("speedmeter");
    speedcount.innerHTML=Math.floor((100-(ms*100/300))) +"%";
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
       var i,j, stop;
       var len = array.length;
    for (i=0; i < len; i++){
        
        for (var j=0, stop=len-i; j < stop; j++){
            if (array[j] > array[j+1]){                     
            await swapp(array,j,j+1);   
            visualize(j,j+1,"#ffc226");
            await sleep(ms);
            visualize(j,j+1,"#EAEAEA");
            }
            else {
                visualize(j,j+1,"#ff2934");
                await sleep(ms);
                visualize(j,j+1,"#EAEAEA");
            }          
            
        }
        
        visualize(j,j,"#25d78d");
        visualize(j-1,j-1,"#25d78d");
        console.log(array[j]);
}
console.log(array);
}

  

 async function quicksortcall(arr2)
 {
     originalArr =[];
     originalArr = arr2;
     arr2= quickSort(originalArr);
     console.log(originalArr)
     
 }
 
//  async function quickSort(originalArr) {
//      if (originalArr.length <= 1) {
//         return originalArr;
//         } else {
//               var leftArr = [];              
//               var rightArr = [];
//               var newArr = [];
//               var pivot = originalArr.pop();      
//               var length = originalArr.length;
//               for (var i = 0; i < length; i++) {
//                  if (originalArr[i] <= pivot) {    
//                     leftArr.push(originalArr[i]);      
//               } else {
//                       rightArr.push(originalArr[i]);
//             }
//           }
//         return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr));                                                                            //returned untill sorting occurs
//      }
//     }

    async function selectionsort(array) { 
        let n = array.length;
            
        for(let i = 0; i < n; i++) {

            let min = i;
            for(var j = i+1; j < n; j++){
                if(array[j] < array[min]) {
                    min=j;
                    visualize(j,min,"#ff2934");
                    await sleep(ms);
                    visualize(j,min,"#EAEAEA"); 
                }
                else{
                    visualize(j,min,"#ff2934");
                    await sleep(ms);
                    visualize(j,min,"#EAEAEA");
                }
             }
             if (min != i) {
                 await swapp(array, i, min)
                 visualize(i,min,"#ffc226");
                 await sleep(ms);
                 visualize(i,min,"#EAEAEA");
                       
            }
            visualize(i-1,i-1,"#25d78d");
            visualize(i,i,"#25d78d");
        }
        console.log(array);
        return array;
    }


 async function insertionSort(array) {
     let n = array.length;
         for (var i = 1; i < n; i++) {
             var current = array[i];
             var j = i-1; 
             while ((j > -1) && (current < array[j])) {
                array[j+1] = array[j]; 
                 visualize(j+1,j+1,"#ffc226");
                 await sleep(ms);
                 visualize(j+1,j+1,"#25d78d");                 
                 j--;
             }
             array[j+1] = current;
             visualize(j+1,j+1,"#42daf5");
             await sleep(ms);
             visualize(j+1,j+1,"#25d78d");
         }
     return console.log(array);
}
