/**my-js-scripts.js is a JavaScript file
 * that helps with creating the design changes
 * in sript.html, such as the color of the div
 * and the adding of divs in body.
 */


//data members needed to perform methods below.
var numPressed = 0;
var numDiv = 1;

var div = document.getElementById('div');

//changeColor() changes the color of the div tabs
function changeColor(color){
    console.log('changing the color to ' + color);

    //get all of the div tabs
    var divArray = document.getElementsByTagName('div');

    //iterates through the divs and changes the color
    for(var i = 0; i < divArray.length; i++){
        divArray[i].style.background = color;
    }
}

//decideColorTochange() figures out what color to chnage the div tab to
function decideColorToChange(){
    console.log('deciding what to change the color to');

    //changes the number from bisque to gold back to back
    if(numPressed%2 == 1){
        changeColor('bisque');
    }
    else if(numPressed%2 == 0){
        changeColor('gold');
    }
    numPressed++;
}

//addDiv() is supposed to add a new 'div' in the html
function addDiv(){
    console.log('adding another div');

    //creates the new div and the p that explains the div 
    var div2 = document.createElement('div');
    var p2 = document.createElement('p');

    //configures the p
    p2.className = 'center';
    p2.textContent = 'This is another div';

    //appends p to div and the div to the body
    div2.appendChild(p2);
    document.getElementsByTagName('body')[0].appendChild(div2);

    numPressed--;
    decideColorToChange();
}