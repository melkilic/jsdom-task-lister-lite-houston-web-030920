
let prioritySelect = document.createElement('select')
let high = document.createElement('option')
high.innerHTML = "High"
let medium = document.createElement('option')
medium.innerHTML = "Medium"
let low = document.createElement('option')
low.innerHTML = "Low"
prioritySelect.append(high,medium,low)

let form = document.querySelector("#create-task-form")
form.append(prioritySelect)

document.addEventListener("submit", (e) => {
  e.preventDefault()
  let userTask = document.querySelector('#new-task-description').value
  let priorityValue = document.querySelector('select').value
  let task = document.createElement('li')
  if (priorityValue == "High Priority !!!"){
    task.style.color = "red"
  } else if (priorityValue == "Medium Priority !!"){
    task.style.color = "yellow"
  }else if (priorityValue == "Low Priority !"){
    task.style.color = "green"
  }
  let btn = document.createElement('button')
  btn.innerHTML = 'X'
  task.innerHTML = userTask
  task.append(btn)
  
  let ulTodos = document.getElementById('tasks');
  ulTodos.append(task)
  btn.addEventListener('click', function(){
    task.remove()
  })
});

