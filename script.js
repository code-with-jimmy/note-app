// step 1 getting by reference

const button = document.getElementById("btn");
const type = document.querySelector(".type");

// click event

const display = (text = "") => {
  const div = document.createElement("div");
  div.classList.add("go");
  
  // Yahan se div.main aur hide class hata di taaki dabba hamesha dikhe
  div.innerHTML = `<div class="parent">
      <button class="del">Del</button>
      <button class="save">${text ? "edit" : "save"}</button>
      <textarea ${text ? "readonly" : ""}></textarea>
      </div>`;
  
  type.appendChild(div);
  
  // getting by reference
  
  const del = div.querySelector(".del");
  const save = div.querySelector(".save");
  const textarea = div.querySelector("textarea");
  
  textarea.value = text;
  
  // Save / Edit toggle function
  save.addEventListener("click", () => {
    if (textarea.hasAttribute("readonly")) {
      textarea.removeAttribute("readonly");
      save.textContent = "save";
    } else {
      textarea.setAttribute("readonly", true);
      save.textContent = "edit";
    }
    autoSave();
  });
  
  // del button delete Function
  
  del.addEventListener("click", () => {
    div.remove();
    autoSave();
  });
  
  const autoSave = () => {
    let note = [];
    const alltexteara = document.querySelectorAll("textarea");
    
    alltexteara.forEach((notes) => {
      note.push(notes.value);
    });
    localStorage.setItem("saving", JSON.stringify(note));
  };
  
  textarea.addEventListener("input", () => {
    autoSave();
  });
};

const getvalue = JSON.parse(localStorage.getItem("saving"));

if (getvalue) {
  getvalue.forEach((values) => {
    display(values);
  });
}

// btn addEventListener

button.addEventListener("click", () => {
  display();
});
