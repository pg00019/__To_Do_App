// add items to display
window.onload = () => {
  document.getElementById("add-text").value="";
  document.getElementById("btn").addEventListener("click", addElement);

}

let i=0;
  function addElement() {

  // create close button
  var div = document.createElement("div");
  div.className="span2";
  var span2 = document.createElement("span");// close button element 
  span2.className ="close-btn";
  var text_node = document.createTextNode("\u00D7");
  div.appendChild(span2);
  span2.appendChild(text_node);  //  button inside span

  // get the value of the input field 
  var msg = document.getElementById("add-text").value;
  var textNode = document.createTextNode(msg);

  // create li  
  var list= document.createElement("li");// li element 
  list.className ="listLi"; 
  list.appendChild(textNode); // message inside Li
  list.appendChild(span2);

  
  if (msg === '') {
    alert("You must write something!");
  } else {
    document.getElementById("papaUl").appendChild(list);
    //document.getElementsByClassName("").appendChild(C_element2);
  }
  
  document.getElementById("add-text").value = "";

  document.getElementsByClassName("close-btn")[i].addEventListener("click", function()
      {
        this.parentNode.remove();
         i--;
       }) 
i++
  }


