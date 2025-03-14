// let facts = [];
// const factBtn = document.getElementById("factBtn");
// const factList = document.getElementById("fact-list");
// const dogBtn = document.getElementById("btn2");
// const dogImage = document.getElementById("dogImage");

// const factUrl = "https://catfact.ninja/fact";
// const dogUrl = "https://dog.ceo/api/breeds/image/random";

// factBtn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     facts.push(fact); 

//     factList.innerHTML = ""; 

//     facts.forEach((fact) => {
//         let li = document.createElement("li");
//         li.innerText = fact;
//         factList.appendChild(li);
//     });
// });

// async function getFacts() {
//     try {
//         let res = await axios.get(factUrl);
//         return res.data.fact;
//     } catch (e) {
//         console.log("Error fetching cat fact:", e);
//         return "No fact found!";
//     }
// }

// dogBtn.addEventListener("click", async () => {
//     let imageUrl = await getImages();
//     dogImage.src = imageUrl;
//     dogImage.style.display = "block";
// });

// async function getImages() {
//     try {
//         let res2 = await axios.get(dogUrl);
//         return res2.data.message;
//     } catch (error) {
//         console.error("Error fetching dog image:", error);
//         return "";
//     }
// }

// const url = "https://icanhazdadjoke.com/";

// async function getJokes() {
//     try {
//         const config = {headers : {Accept: "application/json"}};
//         let res = await axios.get(url,config);
//         console.log(res.data.joke);
//     } catch(err) {
//         console.log(err);
//     }
// }

// let url = "http://universities.hipolabs.com/search?name=";


// let btn = document.querySelector("button");
// let input = document.querySelector("input");
// btn.addEventListener("click", async () => {
//     let countryName = input.value;
//     let colArr = await getColleges(countryName);
//     show(colArr);
// })

// function show(colArr) {
//     let list = document.querySelector("#list");
//     list.innerText = "";
//     for(col of colArr){
//         let li = document.createElement("li");
//         li.innerText = col.name;
//         list.appendChild(li);
//     }
// }


// async function getColleges(country) {
//     try {
//         let res = await axios.get(url+country);
//         return res.data;
//     } catch(e) {
//         console.log("err-",e);
//         return [];
//     }
// }



