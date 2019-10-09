

// // <!-- -DOM stands for Document Object Mode, and it is what alllows our JavaScript to interact with the HTML and CSS of our webpage.
//     - every element in a document - wether it be the HTML document as a whole, the head, the tables within the document, the table headers, text within the table cells - are all part of the DOM for that HTML document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript. 
// // -->

let x = 10
console.log(x);

// // 2. get 
// document.getElementById('testParagraph').style.color = 'blue';

let testParagraph = document.getElementById('testParagraph');
testParagraph.style.color = "red";

console.log(testParagraph);


// // getElements will grab the first HTML element with the specific value 0 if we have multiple elementas with someID it will only grabthe first one-->

// // 3. querySelectorAll & innerText, innerHTML, and textContent
// console.log(document.querySelectorAll('p.sampleClass')) //querySelectorAll returns a NodeList containing all elements that match the specific group of selectors, NodeList objects are collection of nodes, and nodes are simple just varoius itemms in the HTML document itself. 

// document.querySelectorAll('p.sampleClass')[2].innerText = 'My text has changed!'; //need to use bracket notation to select an index from the NodeList array, even if there's only one element. 

let changeAll = document.querySelectorAll('p.sampleClass')

changeAll.forEach(pTag => {
    // pTag.innerText = 'My text has changed using a forEach method!';
    // pTag.textContent = 'My text has changed using a forEach method!';
    pTag.innerHTML = "<i>My text has changed using a forEach method!</i>"
})

/*

INNERTEXT vs INNERHTML vs TEXT CONTENT

- innerText simply references or allows us to change the test of a specific element. Will return only visible text ina 'node'
- textConted does the same thing as innerTextk, but will return the FULL text of a 'node'
- innerHTML allows us to set text as well as HTML elements, which will be nested inside of the current HTML we're refencing, 
*/

// console.log(document.getElementById('spanTest').innerText);
// console.log(document.getElementById('spanTest').textContent);


//4. eventListeners - click 

// document.getElementById('clickThisButton').addEventListener('click', event => {
//     event.target.style.backgroundColor = 'blue';
    
//     console.log(event);
//     console.log(event.target);
// })


/*l
**************
CHALLANGE
*********

make the butting toggle between red and blue when cliked

*/

let clickThisButton = document.getElementById('clickThisButton');
clickThisButton.style.backgroundColor = "red";

document.getElementById('clickThisButton').addEventListener('click', event => {
    if (event.target.style.backgroundColor == 'red') {
        event.target.style.backgroundColor = 'blue';
    } else {
        event.target.style.backgroundColor = 'red';
    }
})

// 5. eventListeners - keyup /getElementByTagName

//get elements by will return all elements with the given name. We then need to use bracket notation to grab which element we want to targt. 

console.log(document.getElementsByTagName('p'))

document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed!'

document.getElementById('nameInput').addEventListener('keyup', function(event) {
    console.log(event.target.value)



    if (event.target.value == '') {
        document.getElementsByTagName('p')[1].innerText='Nothing has been typed'
    } else {
        document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${event.target.value}`
    }
})
