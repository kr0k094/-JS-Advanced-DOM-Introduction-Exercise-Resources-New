function search() {
  let list = document.querySelectorAll("ul#towns li");
  let result = document.getElementById("result");
  let search = document.getElementById("searchText").value;
  let counter = 0;

  for (const li of list) {
     li.style.fontWeight = "normal";
     li.style.textDecoration =""
  }
  

  for (const el of list) {
     let text = el.textContent
     if(text.match(search)) {
        counter++;
        el.style.fontWeight="bold"
        el.style.textDecoration = "underline";
     }
  }
  result.textContent = `${counter} matches found`
}
