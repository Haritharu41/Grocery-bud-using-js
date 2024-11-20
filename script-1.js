let input = document.querySelector("input");
let subBtn = document.querySelector(".subBtn");
let list = document.querySelector(".list");
let clearBtn = document.querySelector(".clearBtn");

subBtn.addEventListener("click", () => {
  if (input.value == "") {
    alert("Enter something");
  }
  let action = subBtn.getAttribute("action");
  if (action) {
    let index = Number(action);
    let listItems = document.querySelectorAll(".listItem");
    listItems[index].innerHTML = `
  ${input.value} <div class="buttons"><button class="editBtn"><img src="edit.svg" alt="" /></button
  ><button class="delBtn"><img src="delete.svg" alt="" /></button></div>`;
    input.value = "";
    subBtn.setAttribute("action", "");

    del();
    edit();
  } else {
    add();
    del();
    edit();
  }
});

edit();
del();

clearBtn.addEventListener("click", () => {
  console.log(list);

  list.innerHTML = "";
});

function add() {
  list.innerHTML += `<li class="listItem">
    ${input.value} <div class="buttons"><button class="editBtn"><img src="edit.svg" alt="" /></button
    ><button class="delBtn"><img src="delete.svg" alt="" /></button></div>
  </li>`;
  input.value = "";
}

function del() {
  let listItems = document.querySelectorAll(".listItem");
  listItems.forEach((item) => {
    let delBtn = item.querySelector(".delBtn");
    delBtn.addEventListener("click", () => {
      item.remove();
      
      edit();
    });
  });
}

function edit() {
  let listItems = document.querySelectorAll(".listItem");

  listItems.forEach((item, index) => {
    let editBtn = item.querySelector(".editBtn");
    editBtn.addEventListener("click", () => {
      input.value = item.innerText;
      subBtn.setAttribute("action", index);
    });
  });
  console.log(listItems, "edit helloo");
}
