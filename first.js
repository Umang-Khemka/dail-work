// // // // let todo = [];
// // // // let req = prompt("Please enter your request: ");

// // // // while (true) {
// // // //     if (req === "quit") {
// // // //         console.log("Quitting the app");
// // // //         break;
// // // //     }
// // // //     if (req === "list") {
// // // //         console.log("-----------");
// // // //         for (let i = 0; i < todo.length; i++) {
// // // //             console.log(`${i}. ${todo[i]}`);
// // // //             }
// // // //         console.log("-----------");
// // // //     }
// // // //     else if (req === "add") {
// // // //         let task = prompt("Please enter the task you want to add: ");
// // // //         todo.push(task);
// // // //         console.log("Task added: " + task);
// // // //     }
// // // //     else if (req === "delete") {
// // // //         let index = prompt("Enter index of task to delete: ");
// // // //         index = parseInt(index);
        
// // // //         if (index >= 0 && index < todo.length) {
// // // //             let deletedTask = todo.splice(index, 1);
// // // //             console.log("Deleted task: " + deletedTask);
// // // //             console.log("-----------");
// // // //             for (task of todo) {
// // // //                 console.log(task);
// // // //             }
// // // //             console.log("-----------");
// // // //         } else {
// // // //             console.log("Invalid index");
// // // //         }
// // // //     }

// // // //     req = prompt("Please enter your request (add, delete, list or quit): ");
// // // // }


// // // // const student = {
// // // //     name: "Umang",
// // // //     age: 20,
// // // //     city: "Surat",
// // // //     marks: 90
// // // // };

// // // // const classInfo = {
// // // //     umang : {
// // // //         grade: "A+",
// // // //         marks: 90
// // // //     },
// // // //     Rahul : {
// // // //         grade: "A",
// // // //         marks: 85
// // // //     },
// // // //     Rohan : {
// // // //         grade: "B",
// // // //         marks: 70
// // // //     }
// // // // };

// // // // const post = {
// // // //     username: "@umangkhemka",
// // // //     content: "#firstPost",
// // // //     likes: 100,
// // // //     reposts: 10,
// // // //     tags: ["@umang", "@khemka"]
// // // // };

// // // // const obj = {
// // // //     1: "a",
// // // //     2: "b",
// // // //     3: "c",
// // // //     4: "d"
// // // // };


// // // // document.addEventListener('DOMContentLoaded', function() {
// // // //     const max = parseInt(prompt("Enter the maximum number: "));
// // // //     document.getElementById("maxNumber").textContent = max;

// // // //     const rand = Math.floor(Math.random() * max) + 1;
// // // //     let guessInput = document.getElementById("guessInput");
// // // //     let guessBtn = document.getElementById("guessBtn");
// // // //     let quitBtn = document.getElementById("quitBtn");
// // // //     let message = document.getElementById("message");

// // // //     guessBtn.addEventListener('click', function() {
// // // //         let guess = parseInt(guessInput.value);
// // // //         if (guess === rand) {
// // // //             message.textContent = "You are right, Congrats!";
// // // //         } else if (guess > rand) {
// // // //             message.textContent = "Your guess was high, Try again";
// // // //         } else if (guess < rand) {
// // // //             message.textContent = "Your guess was low, Try again";
// // // //         } else {
// // // //             message.textContent = "Invalid input";
// // // //         }
// // // //     });

// // // //     quitBtn.addEventListener('click', function() {
// // // //         message.textContent = "User quit";
// // // //         message.textContent += `\nThe random number was: ${rand}`;
// // // //     });
// // // // });

// // // // function sum(n){
// // // //     let sum = 0;
// // // //     for(let i=1;i<=n;i++){
// // // //         sum += i;
// // // //     }
// // // //     // return (n*(n+1))/2;
// // // //     return sum;
// // // // }

// // // // console.log(sum(10));

// // // // let str = ["hi", "hello", "bye", "!"];
// // // // function concat(str){
// // // //     let result = "";
// // // //     for(let i=0;i<str.length;i++){
// // // //         result += str[i];
// // // //     }
// // // //     return result;
// // // // }


// // // // const student = {
// // // //     name: "Umang",
// // // //     age: 18,
// // // //     eng: 45,
// // // //     maths: 45,
// // // //     phy: 34
// // // // };

// // // // function getAvg(){
// // // //     let avg = (this.eng + this.maths + this.phy)/3;
// // // //     console.log(avg);
// // // // }


// // // // const sum = (a,b) => {
// // // //     console.log(a+b);
// // // // };

// // // // const cube = (n) => {
// // // //     return n*n*n;
// // // // };

// // // // const mul = (a,b) => (
// // // //     a * b
// // // // );

// // // // const object = {
// // // //     message: 'Hello, World',

// // // //     logMessage() {
// // // //         console.log(this.message);
// // // //     }
// // // // };

// // // // setTimeout(object.logMessage, 1000);

// // // // let arr = [1,2,3,4,5];

// // // // // arr.forEach((el) => {
// // // // //     console.log(el);
// // // // // });

// // // // // let print = function(el) {
// // // // //     console.log(el);
// // // // // };

// // // // // arr.forEach(print);

// // // // let double = arr.map(function(el) {
// // // //     return el*2;
// // // // });
// // // // console.log(double);


// // // let nums = [1,2,3,4,5,6,7,10,12];
// // // // let ans = nums.filter((el) => {
// // // //     return el%2 == 0;
// // // // })

// // // // // let arr = [2,4,6,8];
// // // // // arr.every((el) => (el%2 == 0));

// // // // let min = nums.reduce((min,el) => {
// // // //     if(min<el){
// // // //         return min;
// // // //     }
// // // //     else {
// // // //         return el;
// // // //     }
// // // // });
// // // // console.log(min);


// // // let strings=["adam","bob","catlyn","donald","eve"];
// // // console.log(strings.map((string)=>string.toUpperCase()));

// // // const doubleAndReturnArgs = (arr, ...args) => [
// // //     ...arr, 
// // //     ...args.map((v) => v*2),
// // // ];
// // // console.log(doubleAndReturnArgs([1,2,3], 4,5,6));

// // // const mergeObjects = (obj1,obj2) => ({...obj1, ...obj2});
// // // const result = mergeObjects({a: 1, b: 2}, {c: 3, d: 4});
// // // console.log(result);

// // // let arr = [1,2,3,4,5];
// // // console.log(arr.map((number) => number+5));

// // console.log("Hello!");

// // function saveToDB(data){
// //     let internetSpeed = Math.floor(Math.random()*10) + 1;
// //     if(internetSpeed > 4){
// //         console.log("Your data was saved! ");
// //     } else {
// //         console.log("Weak connection, Data was not saved!");
// //     }
// // }

// // function saveToDB(data) {
// //     return new Promise((resolve, reject) => {
// //         let internetSpeed = Math.floor(Math.random() * 10) + 1;
// //         if (internetSpeed > 4) {
// //             resolve("Data was saved");
// //         } else {
// //             reject("Data was not saved");
// //         }
// //     });
// // }

// // saveToDB("Umang Khemka")
// //     .then((result) => {
// //         console.log("Data 1 resolved:", result);
// //         return saveToDB("Hello World");
// //     })
// //     .then((result) => {
// //         console.log("Data 2 resolved:", result);
// //     })
// //     .catch((error) => {
// //         console.log("Promise was rejected:", error);
// //     });


// // async function greet() {
// //     throw "weak connection!";
// //     return "hello!";
// // }

// // greet()
// // .then((result) => {
// //     console.log("promise was seccessfull");
// //     console.log("result was:",result);
// // })

// // .catch((err) => {
// //     console.log("promise was rejected: ", err)
// // })


// // h1 = document.querySelector("h1");

// // function changeColor(color,delay) {
// //     return new Promise((resolve,reject) => {
// //         setTimeout(() => {
// //             let num = Math.floor(Math.random()*5)+1;
// //             if(num > 3){
// //                 reject("promise rejected!");
// //             }
// //             h1.style.color = color;
// //             console.log(`color change to ${color}!`);
// //             resolve("color changed!");
// //         },delay);
// //     });
// // }

// // async function demo() {
// //     try {
// //         await changeColor("red",1000);
// //         await changeColor("orange",1000);
// //         await changeColor("green",1000);
// //         await changeColor("blue",1000);
// //     } catch (err) {
// //         console.log("error caught!");
// //         console.log(err);
// //     }

// //     let a = 5;
// //     console.log(a);
// //     console.log("hew number: ",a+3);
// // }

// let btn = document.querySelector("button");
// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText = fact;
// }); //btn only changes fact every time

let facts = []; 

let btn = document.querySelector("button");
btn.addEventListener("click", async () => {
    let fact = await getFacts();
    facts.push(fact); 
    console.log(facts); 

    let ul = document.querySelector("#fact-list");
    ul.innerHTML = ""; 

    facts.forEach((fact, index) => {
        let li = document.createElement("li");
        li.innerText = `${fact}`;
        ul.appendChild(li);
    });
}); // btn list the facts evry time

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch(e) {
        console.log("error - ", e);
        return "No fact found!!";
    }
}

const url2 = "https://dog.ceo/api/breeds/image/random";

async function getImages() {
    try {
        let res2 = await axios.get(url2);
        return res2.data.message; 
    } catch (error) {
        console.error("Error fetching dog image:", error);
    }
}

document.getElementById("fetchDogBtn").addEventListener("click", async function() {
    let imageUrl = await getImages();
    let imgElement = document.getElementById("dogImage");
    imgElement.src = imageUrl;
    imgElement.style.display = "block";
});


// async function getFacts() {
//     try {
//         let res = await fetch(url);
//         let data = await res.json();
//         console.log(data.fact);

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         console.log(data2.fact);
//     } catch(e) {
//         console.log("error - ",e);
//     }
//     console.log("bye!");
// }
