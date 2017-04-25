//get 1 of 2 potential inputs

document.getElementById('FtoC').onclick=farToCel;

document.getElementById('CtoF').onclick=celToFar;


//have 2 functions, F to C first, then C to F
function farToCel() {
  var far = document.getElementById('far').value;
 far =parseFloat(far);
   
 var cel= ((far - 32)*.5556);
  
 document.getElementById('cel').value = cel; 

}



function celToFar(){
  var cel= document.getElementById('cel').value;
  cel =parseFloat(cel);
  
  var far= ((cel / .5556) + 32);
  
  document.getElementById('far').value = far;
}


  