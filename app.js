let mainButton = document.querySelector('.todo-add');
let plusIcon = document.querySelector('.fa-plus');
let buttonContainer = document.querySelector('.buttons-container');
let inputtwo = document.querySelectorAll('input');

plusIcon.addEventListener('click', ()=> {
  mainButton.classList.toggle('type-todo');
  if (buttonContainer.id == 'hide') {
    buttonContainer.removeAttribute('id');
    
  } else {
    buttonContainer.id = 'hide';
  }
  if (plusIcon.id == 'go-up') {
    plusIcon.removeAttribute('id');
    plusIcon.style.transform = '';
  }else {
    plusIcon.id = 'go-up';
    plusIcon.style.transform = 'translateX(135px) translateY(-20px) rotate(45deg)';
  }
  for (const input of inputtwo) {
    input.classList.toggle('hide');
    
  }
})
// ----------------add text to box-----------------

redTodoList = [];
greenTodoList = [];
aquaTodoList = [];
purpleTodoList = [];

let fourButton = document.querySelectorAll('.todo-add-button');

let redTodoNum = 0;
// redTodoNum = numone;
// numone = 1;
let greenTodoNum = 0;
let aquaTodoNum = 0;
let purpleTodoNum = 0;



for (let btn of fourButton) {
  let color = btn.id;
  btn.addEventListener('click', () =>  {
    let typeInput = document.querySelector("input[type='text']");
    let dateInput = document.querySelector("#due-date");
    let typeValue = typeInput.value;
    let dateValue = dateInput.value;

    if (typeInput.value == '') {
      alert('look like you do not type any todo')
      
    }else if (color == 'red') {
      redTodoNum++;
      redTodoList.push({
        name: typeValue,
        dueDate: dateValue
      })
      typeInput.value = '';
      dateInput.value = '';
      addTodo(color, redTodoList);

    } else if (color == 'green') {
      greenTodoNum++;
      greenTodoList.push({
        name: typeValue,
        dueDate: dateValue
      })
      typeInput.value = '';
      dateInput.value = '';
      addTodo(color, greenTodoList);

    } else if (color == 'aqua') {
      aquaTodoNum++;
      aquaTodoList.push({
        name: typeValue,
        dueDate: dateValue
      })
      typeInput.value = '';
      dateInput.value = '';
      addTodo(color, aquaTodoList);

    } else if (color == 'purple') {
      purpleTodoNum++;
      purpleTodoList.push({
        name: typeValue,
        dueDate: dateValue
      })
      typeInput.value = '';
      dateInput.value = '';
      addTodo(color, purpleTodoList);
    }
    })}
 
    function addTodo(color, array) {
      console.log(color);
      let box = document.querySelector(`#${color}box`);
     if ((color == 'red' && redTodoNum > 4) ||
    (color == 'green' && greenTodoNum > 5) ||
    (color == 'aqua' && aquaTodoNum > 6) ||
    (color == 'purple' && purpleTodoNum > 7)) {
      alert('Prioritizing a minimum number of essential tasks enhances focus and productivity, ensuring meaningful progress over overwhelming oneself with an extensive list. and that is the goal of minimal todo');
    } else  {
      box.innerHTML='';
      for (let i = 0; i < array.length; i++) {
        console.log(i);
        const todoObject = array[i];
        console.log(array);
        name = todoObject.name;
        dueDate = todoObject.dueDate;
        
        let htmltext = `<p>&#8226;</p> 
      <p>${name}</p>
      <p>${dueDate}</p>
      <div class="tick" onclick = "removeTodo(${color}TodoList, ${i}, '${color}');"><span><i class="fa-solid fa-check"></i></span></div>
      <div class="xmark" onclick = "removeTodo(${color}TodoList, ${i}, '${color}');"><span><i class="fa-solid fa-xmark"></i></span></div>`; 
      console.log(htmltext);
      box.innerHTML += htmltext;
      }
    }
    }

  
    function removeTodo(color, index, colorname) {
      
      let  array = color;
      array.splice(index, 1);
      
      // let todoNumber = `${colorname}TodoNum`;
      // todoNumber--;
      // `${colorname}'TodoNum'`--;
      addTodo(colorname, array);
      if (colorname == 'red') {
        redTodoNum--;
      } else if (colorname == 'green') {
        greenTodoNum--;
      } else if (colorname == 'aqua') {
        aquaTodoNum--;
      } else if (colorname == 'purple') {
        purpleTodoNum--;
      }
    }



  

 