//Accordeon
let cliquez = document.querySelectorAll("nav");

for(let i = 0; i < cliquez.length; i++){
cliquez[i].addEventListener("click", function(){
    let result = this.nextElementSibling;
    result.classList.toggle("active");
})
}
//Bouton Random apprenant
var list = ["William","Cécile","Vincent","Romain","Aline","Isabelle",
"Julian","Mohammed","Blandine","Paul-Emmanuel","Thomas","Elodie","Noredinne","Sana"];
function generator() {
 document.getElementById("apprenant").innerHTML = list[Math.floor(Math.random() * list.length)];
}
setInterval(function(generator) {document.getElementById('apprenant').innerHTML = "Random Apprenant";
},3000);