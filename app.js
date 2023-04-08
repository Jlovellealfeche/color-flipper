
const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "hsl(60, 60%, 80%)"];

const btn = document.getElementById('btn'); // this is where you needed the btn id on the button tag
const color =  document.querySelector(".color");

//This is for the event listener
                            //here just add an anonymous function
    //the first task is to target background to change color once the button is clicked
btn.addEventListener('click', function() {
   //1. console.log(document.body); this is to check if the button is clicked the body element will be logged into the console.
   // 2. the goal is to get random number between 0-5 color[4] 
   const randomNumber = getRandomNumber(); //6. now invoke it here replace the 4 with randomNumber = getRandomNumber()
    console.log(randomNumber);             //7. Since we wanted to show which values we are getting we can log randomNumber in the console
   document.body.style.backgroundColor = colors[randomNumber];
   color.textContent = colors[randomNumber];
})
//3. now we need to generate a random number from our color[array], so we need to make another function

function getRandomNumber() { // 4. dont accept any parameters in getRandomNumber
        return Math.random() * colors.length;                        /*5. but we can return a function using Math.random()method then invoke it
                                                    Note: with math.random we are always getting numbers from 0-1 eg. 0.556, 0.99, etc*/

}





//13:37 to be continued