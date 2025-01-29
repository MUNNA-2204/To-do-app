let todoList =[

]


displayitems()
function addtodo() {
  let inputelement = document.querySelector('#todoinput')
  let dateelement = document.querySelector('#todo-date')
  let todoItem =inputelement.value
  let tododate= dateelement.value
  todoList.push({item: todoItem , duedate: tododate} )
  inputelement.value=''
  dateelement.value=''

  displayitems()
}

function displayitems() {
  let containerlements =document.querySelector('.todo-container')
  let newhtml =''

  for (let i=0;i<todoList.length ;i++) {

    let { item,duedate }=todoList[i]
    newhtml +=
      `
        <span> ${item} </span>
        <span> ${duedate} </span>
        <button class="btn-delete" onclick ="todoList.splice(${i},1); displayitems();"> Delete </button>
       `
  }
  containerlements.innerHTML=newhtml
}