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

let fourButton = document.querySelectorAll('.todo-add-button');

let redTodoNum = 0;
let greenTodoNum = 0;
let aquaTodoNum = 0;
let purpleTodoNum = 0;
for (let btn of fourButton) {
  let color = btn.id;
  btn.addEventListener('click', () =>  {
    if (color == 'red') {
      redTodoNum++;
    } else if (color == 'green') {
      greenTodoNum++;
    } else if (color == 'aqua') {
      aquaTodoNum++;
    } else if (color == 'purple') {
      purpleTodoNum++;
    }
  let typeInput = document.querySelector("input[type='text']");
  let dateInput = document.querySelector("input[type='date']");
  let typeValue = typeInput.value;
  let dateValue = dateInput.value;
  let box = document.querySelector(`#${color}box`);
    
    if (typeInput.value == '') {
      alert('look like you do not type any todo')
      
    } else if ((color == 'red' && redTodoNum > 4) ||
    (color == 'green' && greenTodoNum > 5) ||
    (color == 'aqua' && aquaTodoNum > 6) ||
    (color == 'purple' && purpleTodoNum > 7)) {
      alert('Prioritizing a minimum number of essential tasks enhances focus and productivity, ensuring meaningful progress over overwhelming oneself with an extensive list. and that is the goal of minimal todo');
    } else  {
      box.innerHTML += `<p>&#8226;</p> <p>${typeValue}</p><p>${dateValue}</p><div class="tick"><span class=><i class="fa-solid fa-check"></i></span></div>
      <div class="xmark"><span><i class="fa-solid fa-xmark"></i></span></div>`;   
      typeInput.value = '';
      dateInput.value = '';
  }
    }
        
  )
}









// fourButton.forEach((btn, i, array)=> {
//   if (i == 0) {
//     let redTodoNum = 1;
//     btn.addEventListener('click', ()=>{
//       let typeValue = typeInput.value;
//       let dateValue = dateInput.value;
//       let redbtn = document.querySelector('#red');
      
//       if (typeInput.value == '') {
//         alert('look like you do not type any todo')
//       } else if (redTodoNum > 4) {
//         alert('Prioritizing a minimum number of essential tasks enhances focus and productivity, ensuring meaningful progress over overwhelming oneself with an extensive list. and that is the goal of minimal todo')
//       } else  {
//         redbtn.innerHTML += `<p>&#8226;</p> <p>${typeValue}</p>
//         <p>${dateValue}</p>
//         <div class="tick"><span class=><i class="fa-solid fa-check"></i></span></div>
//         <div class="xmark"><span><i class="fa-solid fa-xmark"></i></span></div>
//         `;
//         redTodoNum++;   
//       }
          
      
//       typeInput.value = '';
//   })} else if (i == 1) {

//     let greenTodoNum = 1;
//     btn.addEventListener('click', ()=>{

//       let typeValue = typeInput.value;
//       let dateValue = dateInput.value;
//       let greenbtn = document.querySelector('#green');
      
//       if (typeInput.value == '') {
//         alert('look like you do not type any todo')
        
//       } else if (greenTodoNum > 4) {
//         alert('Prioritizing a minimum number of essential tasks enhances focus and productivity, ensuring meaningful progress over overwhelming oneself with an extensive list. and that is the goal of minimal todo')
//       } else  {
//         redbtn.innerHTML += `<p>&#8226;</p> <p>${typeValue}</p>
//         <p>${dateValue}</p>
//         <div class="tick"><span class=><i class="fa-solid fa-check"></i></span></div>
//         <div class="xmark"><span><i class="fa-solid fa-xmark"></i></span></div>
//         `;
//         greenTodoNum++;   
//       }
          
      
//       typeInput.value = '';
//   })}



  

 