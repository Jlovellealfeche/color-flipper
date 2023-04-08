const hex = [0, 1, 2, 3, 4, 5, 6, 7,
8, 9, "A", "B", "C", "D", "E", "F"];

/*where hex color consist of the #(hashtag) and we have 6 values that could be from 0-9 
then we have letters that represent 10,11-15
a typical example of a hex color is #F1f5f8*/
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

//2. here add btn listener

btn.addEventListener("click", function () {
    /*3. now we need to generate a loop that will generate the hex colors on a fly 
    lets again target the body*/

    let hexColor = "#"; //4. in order to get the hex value we must have this hashtag
    for(let i = 0; i < 6; i++){ //5. now we need to set up a loop that will run 6 times. Why 6 times because we have 6 values in the hexcolor from the array. we wanted to stop the loop before i <= 6
        hexColor += hex[getRandomNumber()]; // 6. for each and every iteration we can add a value from the array
    }       //10. invoke getrandomnumber() function to hex array
    
    // 7. then will target the body as well as the text content
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

/*8. Since the hex value at line no. 18 is only targeting 0 for now 
we need to set up a new function */

function getRandomNumber() {
    return Math.floor( Math.random() * hex.length); // 9. we will invoke it but the difference is we will multiply it with the length and not with the color
}