// const input = document.querySelector("input");
// const subBtn = document.querySelector(".subBtn");

// const list = document.querySelector(".list");





// subBtn.addEventListener("click", () => {
//   let inputValue = input.value;

// if(input.value==""){
//   alert("Enter something")
// }


// let id=subBtn.getAttribute("id");

// console.log(id,"hello upper action");

// if(id){
//   let index= Number(id)
//   console.log(index,"hello index");
  
//   let listItems = document.querySelectorAll(".listItem");
//   listItems[index].innerHTML= `
//    <li class="listItem">
//   ${input.value} <div class="buttons"><button class="editBtn"><img src="edit.svg" alt="" /></button
//   ><button class="delBtn"><img src="delete.svg" alt="" /></button></div>
// </li>`;
// input.value = "";
// subBtn.setAttribute("id","");

  
// }else{
//   list.innerHTML += `  <li class="listItem">
//   ${inputValue} <div class="buttons"><button class="editBtn"><img src="edit.svg" alt="" /></button
//   ><button class="delBtn"><img src="delete.svg" alt="" /></button></div>
// </li>`;

// input.value = "";
// }

//   del();

// edit()

// });



// del();
// clearAll();
// edit()

// function del() {
//   let listItems = document.querySelectorAll(".listItem");
//   listItems.forEach((item) => {
//     let delBtn = item.querySelector(".delBtn");
//     delBtn.addEventListener("click", () => {
//       item.remove();
//     });
//   });
// }



// function clearAll() {
//   let clearAllBtn = document.querySelector(".clearBtn");
//   clearAllBtn.addEventListener("click", () => {
//     let list = document.querySelector(".list");

//     list.innerHTML = "";
//   });
// }


// function edit() {
//   let listItems = document.querySelectorAll(".listItem");
//   listItems.forEach((item, index) => {
//     let editBtn = item.querySelector(".editBtn");
//     editBtn.addEventListener("click", () => {
//       input.value= item.innerText;
//       subBtn.setAttribute("id",index);
//     });
//   });
// }
