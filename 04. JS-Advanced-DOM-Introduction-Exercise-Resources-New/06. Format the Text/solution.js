function solve() {
 let input = document.getElementById("input").value;
 let output = document.getElementById("output");
 let result = [];

 let arr = Array.from(input.split(".").filter((x)=> x != ""));


 while(arr.length != 0){
   let text = arr.splice(0,3).join(". ") + ".";
   let p = document.createElement("p");
   p.textContent = text;
   output.appendChild(p);
 }

}