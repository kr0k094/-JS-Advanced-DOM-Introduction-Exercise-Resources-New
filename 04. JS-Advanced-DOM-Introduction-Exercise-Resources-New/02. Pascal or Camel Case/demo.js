function solve(text, currentCase) {
    // let text = document.getElementById("text").value;
    // let currentCase = document.getElementById("naming-convention").value;
    let arr = Array.from(text.split(" "));
    let mapArray = arr.map((x)=> x.toLowerCase());
    let result = [];
    let upperWord =""
  
    if(currentCase == "Camel Case" || currentCase == "Pascal Case"){
      for (let i = 0; i < mapArray.length; i++) {
        let currentEl = mapArray[i];
        if(i === 0 && currentCase == "Camel Case") {
          result.push(currentEl);
        }else{
           upperWord = currentEl[0].toUpperCase() + currentEl.substring(1 ,currentEl.length)
        } result.push(upperWord);
  
      }
      document.getElementById("result").textContent = result.join("").trim();
    }else{
      document.getElementById("result").textContent = "Error"
    }
    
   
    //TODO...
  }
  solve("secOND eXamPLE", "Pascal Case")
