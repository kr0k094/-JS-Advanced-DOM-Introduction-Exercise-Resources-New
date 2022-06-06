function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let table = document.querySelectorAll("table.container tr");
      let searchField = document.getElementById("searchField");

      for(let i = 2; i < table.length; i++) {
         table[i].classList.remove("select")
         let text = table[i].innerHTML;
         if(text.match(searchField.value)) {
            table[i].className = "select"
         }
         console.log(text);
      }
      
     searchField.value  = ""

   }
}