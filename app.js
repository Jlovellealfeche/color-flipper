
const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "hsl(60, 60%, 80%)"];

const btn = document.getElementById('btn'); // this is where you needed the btn id on the button tag
const color =  document.querySelector(".color");

//This is for the event listener
                            //here just add an anonymous function
    //the first task is to target background to change color once the button is clicked
btn.addEventListener('click', function(){
   //1. console.log(document.body); this is to check if the button is clicked the body element will be logged into the console.
   // 2. the goal is to get random number between 0-5 color[4] 
   const randomNumber = 4;
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber]
})


//13:37 to be continued