const hex = [0, 1, 2, 3, 4, 5, 6, 7,
8, 9, "A", "B", "C", "D", "E", "F"];

/*where hex color consist of the #(hashtag) and we have 6 values that could be from 0-9 
then we have letters that represent 10,11-15
a typical example of a hex color is #F1f5f8*/
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

//2. here add btn listener

btn.addEventListener('click', function(){
    /*3. now we need to generate a loop that will generate the hex colors on a fly 
    lets again target the body*/

    let hexcolor = '';
})