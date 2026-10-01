let add = document.getElementById("add");
let list = document.querySelector(".list")


// step 1

// add.addEventListener("click", (text = "") => {
const display = (text = "") => {
  let div = document.createElement("div"); 
  div.classList.add("btn-box");
  div.innerHTML = `
    <div class="btn-end">
<button id="btn1"><i class="fa-solid fa-bookmark"></i></button>
<button id="btn2"><i class="fa-solid fa-trash"></i></button>
</div> 
<div>
    <textarea id="taskTextarea" ${text ? "" : "readonly"}></textarea> 
</div>
  `
  
  let taskTextarea = div.querySelector("textarea");
taskTextarea.value = text;
if(taskTextarea.value === "[object PointerEvent]"){
  taskTextarea.value = "";
}

list.prepend(div);
  
  div.querySelector("#btn2").addEventListener("click", () => {
    let check = confirm("Are you sure you want to permanently delete this note?");
    if(check){
    div.remove();
    autoSave()
    }
  })
  
  
//   // step 2
  
  let btn1 = div.querySelector("#btn1");
  
  btn1.addEventListener("click", () => {
    if(taskTextarea.hasAttribute("readonly")){
      taskTextarea.removeAttribute("readonly");
    } else {
      taskTextarea.setAttribute("readonly", true);
    }
    
  })
  
  // list.prepend(div);






// step 3



const autoSave = () => {
  let Empathy = [];
  let allData = document.querySelectorAll("textarea");
  allData.forEach((curl) => {
    if(curl.value == "") return;
      Empathy.push(curl.value);
    
    
  })
  localStorage.setItem("empathy", JSON.stringify(Empathy));
}


taskTextarea.addEventListener("input", () => {
  autoSave();
})

}





let data = JSON.parse(localStorage.getItem("empathy"));
if(data){
  data.forEach((curl) => {
    display(curl);
  })
}













add.addEventListener("click", display)
