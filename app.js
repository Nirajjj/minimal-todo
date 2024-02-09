let mainButton = document.querySelector(".todo-add");
let plusIcon = document.querySelector(".fa-plus");
let buttonContainer = document.querySelector(".buttons-container");
let inputtwo = document.querySelectorAll("input");

plusIcon.addEventListener("click", () => {
  mainButton.classList.toggle("type-todo");
  if (buttonContainer.id == "hide") {
    buttonContainer.removeAttribute("id");
  } else {
    buttonContainer.id = "hide";
  }
  if (plusIcon.id == "go-up") {
    plusIcon.removeAttribute("id");
    plusIcon.style.transform = "";
  } else {
    plusIcon.id = "go-up";
    plusIcon.style.transform =
      "translateX(135px) translateY(-20px) rotate(45deg)";
  }
  for (const input of inputtwo) {
    input.classList.toggle("hide");
  }
});
// ----------------add text to box-----------------

redTodoList = [];
greenTodoList = [];
aquaTodoList = [];
purpleTodoList = [];

let fourButton = document.querySelectorAll(".todo-add-button");

let redTodoNum = 0;
let greenTodoNum = 0;
let aquaTodoNum = 0;
let purpleTodoNum = 0;

for (let btn of fourButton) {
  let color = btn.id;
  btn.addEventListener("click", () => {
    let typeInput = document.querySelector("input[type='text']");
    let dateInput = document.querySelector("#due-date");
    let typeValue = typeInput.value;
    let dateValue = dateInput.value;
    console.log(redTodoNum);
    if (typeInput.value == "") {
      alert("look like you do not type any todo");
    } else if (color == "red" && redTodoNum < 4) {
      redTodoNum++;
      console.log(redTodoNum);

      redTodoList.push({
        name: typeValue,
        dueDate: dateValue,
      });
      typeInput.value = "";
      dateInput.value = "";
      addTodo(color, redTodoList);
    } else if (color == "green" && greenTodoNum < 5) {
      greenTodoNum++;
      greenTodoList.push({
        name: typeValue,
        dueDate: dateValue,
      });
      typeInput.value = "";
      dateInput.value = "";
      addTodo(color, greenTodoList);
    } else if (color == "aqua" && aquaTodoNum < 6) {
      aquaTodoNum++;
      aquaTodoList.push({
        name: typeValue,
        dueDate: dateValue,
      });
      typeInput.value = "";
      dateInput.value = "";
      addTodo(color, aquaTodoList);
    } else if (color == "purple" && purpleTodoNum < 7) {
      purpleTodoNum++;
      purpleTodoList.push({
        name: typeValue,
        dueDate: dateValue,
      });
      typeInput.value = "";
      dateInput.value = "";
      addTodo(color, purpleTodoList);
    } else if (
      (color == "red" && redTodoNum === 4) ||
      (color == "green" && greenTodoNum === 5) ||
      (color == "aqua" && aquaTodoNum === 6) ||
      (color == "purple" && purpleTodoNum === 7)
    ) {
      alert(
        "Prioritizing a minimum number of essential tasks enhances focus and productivity, ensuring meaningful progress over overwhelming oneself with an extensive list. and that is the goal of minimal todo"
      );
    }
  });
}

function addTodo(color, array) {
  let box = document.querySelector(`#${color}box`);

  box.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const todoObject = array[i];
    // name = todoObject.name;
    // dueDate = todoObject.dueDate;
    const { name } = todoObject;
    const { dueDate } = todoObject;
    let htmltext = `<p>&#8226;</p> 
      <p>${name}</p>
      <p>${dueDate}</p>
      <button class="tick" onclick = "removeTodo(${color}TodoList, ${i}, '${color}');"><span><i class="fa-solid fa-check"></i></span></button>
      <button class="xmark" onclick = "removeTodo(${color}TodoList, ${i}, '${color}');"><span><i class="fa-solid fa-xmark"></i></span></button>`;
    box.innerHTML += htmltext;
  }
}

function removeTodo(colorArray, index, colorname) {
  // const todoNumname = `${colorname}TodoNum`;
  // console.log(todoNumname);

  // let todoNumber = `${colorname}TodoNum`;
  // todoNumber--;
  // `${colorname}TodoNum`--;
  colorArray.splice(index, 1);
  console.log(colorArray);

  if (colorname == "red") {
    console.log(redTodoNum);
    redTodoNum--;
  } else if (colorname == "green") {
    greenTodoNum--;
  } else if (colorname == "aqua") {
    aquaTodoNum--;
  } else {
    purpleTodoNum--;
  }
  addTodo(colorname, colorArray);
}
