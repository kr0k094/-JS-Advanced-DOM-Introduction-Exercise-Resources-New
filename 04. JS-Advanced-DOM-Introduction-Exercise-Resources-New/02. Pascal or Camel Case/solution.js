function solve() {
  let text = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;
  let arr = Array.from(text.split(" "));
  let mapArray = arr.map((x)=> x.toLowerCase());
  let result = [];
  

  if(currentCase != "Camel Case" && currentCase != "Pascal Case"){
    return document.getElementById("result").textContent = "Error" 
  }

  
  for (let i = 0; i < mapArray.length; i++) {
    let currentEl = mapArray[i];
    if(i === 0 && currentCase == "Camel Case") {
      currentEl = currentEl.charAt(0).toLowerCase() + currentEl.substring(1,currentEl.length);
    }else {
      currentEl = currentEl.charAt(0).toUpperCase() + currentEl.substring(1,currentEl.length);
    }
    result.push(currentEl);
  }
  
  document.getElementById("result").textContent = result.join("").trim();
 
  //TODO...
}