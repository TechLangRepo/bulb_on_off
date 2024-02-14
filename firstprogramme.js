var bulb = document.querySelector("#bulb")
var btn = document.querySelector("button")
var flag = 0
var delay = 1000;
btn.addEventListener("click", function(){
    if(flag == 0){
      setTimeout(function(){
        bulb.style.backgroundColor = "yellow";

      }, delay);
      
      flag = 1
    }else{
      setTimeout(function(){
        bulb.style.backgroundColor = "transparent"
      }, delay);
     
      flag = 0
    }
})

