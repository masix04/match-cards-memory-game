var rotate = false;
function addAnim(){
	/* document.getElementById("img").classList.add('add-anim');
	  rotate = true; */
  if(rotate==true){
   document.getElementById("img").classList.add('add-reverse-anim');
   rotate=false;
  }
  else{
  	document.getElementById("img").classList.add('add-anim');
  	rotate=true;
  }
}