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
init()


function arrinfo(){
    arrinfotext=document.getElementById("arrinfo");
    arrinfotext.innerHTML= "["+array+" ]";

}


function darkmode(){
    var mode= document.getElementById("flexSwitchCheckDefault");
    var card= document.getElementById("card")
  var cardbody= document.getElementById("card-body")
  var card2= document.getElementById("card2")
  var cardbody2= document.getElementById("card-body2")
  var nav1= document.getElementById("nav1")
  var arrinfotxt= document.getElementById("arrinfo")
  var navbarbrand = document.getElementById("navbarbrand")
  var gitlogo = document.getElementById("gitlogo")

    switch (mode.value){
        case"off":
  
  card.style.backgroundColor="#404040"
  cardbody.style.backgroundColor="#404040"
  cardbody.style.color="white";
  arrinfotxt.style.color="white" 
  card2.style.backgroundColor="#404040"
  cardbody2.style.backgroundColor="#404040"
  cardbody2.style.color="white";  
  nav1.style.backgroundColor="#404040"
  nav1.style.color="white"  
  navbarbrand.style.color = "white";
  gitlogo.style.color = "white";
  document.body.style.backgroundImage = "linear-gradient(to right,#121212,#121212)";
  mode.value="on";
  break;

        case"on":     
        card.style.backgroundColor="white"
        cardbody.style.backgroundColor="white"
        cardbody.style.color="black";
        arrinfotxt.style.color="black" 
        card2.style.backgroundColor="white"
        cardbody2.style.backgroundColor="white"
        cardbody2.style.color="black";        
        nav1.style.backgroundColor="white"
        nav1.style.color="black"       
        navbarbrand.style.color = "black";
        gitlogo.style.color = "black";
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
arrinfo();
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
    
    
    arrinfo();

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
}


 
  

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
             visualize(j+1,j+1,"#0000ff");
             await sleep(ms);
             visualize(j+1,j+1,"#25d78d");
         }
     return console.log(array);
}



async function partition(array, left, right) {
    var half=Math.floor((right + left) / 2)
    console.log(half);
    var pivot   = array[half],      
        i       = left, 
        j       = right;
        
        visualize(half,half,"#ff9100");
        await sleep(ms);
    while (i <= j) {
        while (array[i] < pivot) {
            i++;            
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            await swapp(array, i, j);
            visualize(i,j,"#ffc226");
            await sleep(ms);
            visualize(i,j,"#EAEAEA");
            visualize(half,half,"#ff9100");
            i++;
            j--;
        }
        visualize(i,j,"#ff2934");
        await sleep(ms);
        visualize(i,j,"#EAEAEA");
    }
    visualize(half,half,"#EAEAEA");

    return i;
}

async function quickSort(array, left, right) {
    var index;
    if (array.length > 1) {
        index = await partition(array, left, right); 
        if (left < index - 1) {
           await quickSort(array, left, index - 1);
        }
        if (index < right) { 
           await quickSort(array, index, right);
        }
    }
   
}



