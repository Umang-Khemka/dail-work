// // let btn = document.querySelector("button");

// // btn.addEventListener("click",function() {
// //     let h3 = document.querySelector('h3');
// //     let randomcolor = getRandom();
// //     h3.innerText = randomcolor;

// //     let div = document.querySelector('div');
// //     div.style.backgroundColor = randomcolor;

// //     console.log("color updated");
// // });

// // function getRandom() {
// //     let red = Math.floor(Math.random() * 255);
// //     let green = Math.floor(Math.random() * 255);
// //     let blue = Math.floor(Math.random() * 255);

// //     let color = `rgb(${red}, ${green}, ${blue})`;
// //     return color;
// // }

// let box = document.getElementById('box');

// box.addEventListener('mouseout',function(event){
//     console.log('Mouse has left the box');
//     box.style.backgroundColor = 'lightcoral';
// });

// const inputField = document.getElementById('inputField');
// inputField.addEventListener('keypress', function(event) {
//     console.log('Key pressed:', event.key);
// });

let button = document.createElement('button');
button.textContent = 'Click me';

document.body.append(button);

button.addEventListener('click',function(){
    button.style.backgroundColor = 'green';
});

const nameInput = document.getElementById('inputField');
const nameHeading = document.getElementById('name');

nameInput.addEventListener('input', function(event) {
    // Remove any characters that are not letters or spaces
    const filteredValue = event.target.value.replace(/[^a-zA-Z\s]/g, '');
    
    // Update the input value to the filtered value
    event.target.value = filteredValue;

    // Update the heading with the filtered value
    nameHeading.textContent = filteredValue || "Enter Your Name";
});