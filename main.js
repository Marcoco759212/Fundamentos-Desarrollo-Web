const taskInput = document.querySelector('#todo-input')
const addButton = document.querySelector('#add-todo')
const taskListUI = document.querySelector('#list-todo')

const tasksList = []

const fillTaskList = () => {
  taskListUI.innerHTML = ''

  tasksList.forEach(taskList => {
    const newItem = document.createElement('li')
    const spanItem = document.createElement('span')
    const buttonItem = document.createElement('button')

    spanItem.textContent = taskList.description
    buttonItem.textContent = '✓'
    buttonItem.classList.add('complete-task-button')

    buttonItem.setAttribute('data-index', taskList.id)

    if (taskList.isCompleted === true) {
      spanItem.style = 'text-decoration:line-through;'
    } else {
      spanItem.style = 'text-decoration:none;'
    }

    newItem.appendChild(spanItem)
    newItem.appendChild(buttonItem)

    taskListUI.appendChild(newItem)
  })
}


addButton.addEventListener('click', () => {
  const taskValue = taskInput.value
  tasksList.push({
    id: String(Math.random() * 1000000),
    description: taskValue,
    isCompleted: false
  })

  fillTaskList()

  taskInput.value = ''

  const completeTaskButtons = document.querySelectorAll('.complete-task-button')

  completeTaskButtons.forEach(buttonNode => {
    buttonNode.addEventListener('click', (event) => {
      const taskId = event.srcElement.getAttribute('data-index')
      const task = tasksList.find((task) => task.id === taskId)
      task.isCompleted = true
      fillTaskList()
    })
  });
})
