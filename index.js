// Write your code here!
// const element = document.createElement('div');
// document.body.append(element);

// const ul = document.createElement("ul");
// for (let i = 0; i < 3; i++) {
//     const li = document.createElement("li");
//     li.textContent = (i + 1).toString();
//     ul.append(li);
// }
// element.append(ul);
//ul.remove(); // to remove



//Inserting text into the document. This process works but not recommended. 
// const main = document.getElementById("main");
// main.innerHTML =   "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";


//Change Properties on DOM Nodes
// const element2 = document.getElementById("main");
// element2.style.height = "300px";
// element2.style.backgroundColor = "#27647B";

// element2.className = "pet-listing dog";
// element2.classList.remove("dog");
// element2.classList.add("cat", "sale");

const element = document.getElementById("main");
element.remove();

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "<h1>Tuan is the champion</h1>"
