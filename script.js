const url = "https://script.google.com/macros/s/AKfycbwN1-ML1gq4cI98ykZtMF5RxHhjsO2NXzyyZYeumcWktRi-JDkw1f2P8zQCE7ZP1Qe1_g/exec";

fetch(url)
.then(res => res.json())
.then(players => {

let container = document.getElementById("players");

players.forEach(p => {

let photo = "";

if(p.photo){
let id = p.photo.split("id=")[1];
photo = "https://drive.google.com/uc?export=view&id=" + id;
}

container.innerHTML += `
<div style="border:1px solid black;padding:10px;margin:10px">

<img src="${photo}" width="120"><br>

<h2>${p.name}</h2>
<p>Mobile: ${p.mobile}</p>
<p>Address: ${p.address}</p>
<p>Type: ${p.type}</p>
<p>Category: ${p.category}</p>

</div>
`;

});

})
.catch(error => console.log(error));