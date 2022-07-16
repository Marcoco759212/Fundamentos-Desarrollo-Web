// == Get DOM elements ============================================================
const taskDescInput = document.querySelector('#todo-input')
const addTaskButton = document.querySelector('#add-todo')
const tasksContainer = document.querySelector('#list-todo')

// == Global variable =============================================================
let tasksList = []

// == Functions ===================================================================
// -- Event Listener Handlers -----------------------------------------------------
const handleAddTask = () => {
  const taskValue = getInputValue(taskDescInput)
  addTask(taskValue)
  renderTasks()
  resetInputValue(taskDescInput)
}

// -- Utils -----------------------------------------------------------------------
const clearNodeChilds = (node) => {
  node.innerHTML = ''
}

const resetInputValue = (inputNode) => {
  inputNode.value = ''
}

const getInputValue = (inputNode) => inputNode.value

const generateRandomId = () => String(Math.random() * 1000000)

// -- Task - based ----------------------------------------------------------------
const addTask = (description, isCompleted = false) => {
  tasksList.push({ id: generateRandomId(), description, isCompleted })
  saveTasksInStorage(tasksList)
}

const toggleCompleteTask = (taskId) => {
  const task = tasksList.find((taskList) => taskList.id === taskId)
  task.isCompleted = !task.isCompleted
  localStorage.setItem('tasks', JSON.stringify(tasksList))
}

const deleteTask = (taskId) => {
  const taskIndex = tasksList.findIndex((taskList) => taskList.id === taskId)
  tasksList.splice(taskIndex, 1)
  localStorage.setItem('tasks', JSON.stringify(tasksList))
}

const isTaskCompleted = (task) => task.isCompleted

// -- DOM manipulation ------------------------------------------------------------
const renderTasks = () => {
  clearNodeChilds(tasksContainer)
  tasksList.forEach(generateTaskElements)
}

const generateTaskElements = (task) => {
  const listItemElement = generateListItemElement()
  const spanElement = generateSpanElement(task)
  const completeTaskButtonElement = generateCompleteTaskButtonElement(task)
  const deleteTaskButtonElement = generateDeleteTaskButtonElement(task)
  listItemElement.append(completeTaskButtonElement, spanElement, deleteTaskButtonElement)
  tasksContainer.appendChild(listItemElement)
}

const generateListItemElement = () => {
  const listItemElement = document.createElement('li')
  return listItemElement
}

const generateSpanElement = (task) => {
  const spanElement = document.createElement('span')
  spanElement.textContent = task.description
  spanElement.style = `text-decoration:${isTaskCompleted(task) ? 'line-through' : 'none'};`
  return spanElement
}

const generateCompleteTaskButtonElement = (task) => {
  const completeTaskButtonElement = document.createElement('button')
  completeTaskButtonElement.setAttribute('data-index', task.id)
  completeTaskButtonElement.setAttribute('class', `button btn${isTaskCompleted(task) ? '' : '-outline'}-primary`)
  //completeTaskButtonElement.textContent = isTaskCompleted(task) ? '🔴' : '⚪️'
  completeTaskButtonElement.innerHTML = isTaskCompleted(task) ? '&#x2713;' : ''
  addEventListenerToButton(completeTaskButtonElement, 'complete')
  return completeTaskButtonElement
}

const generateDeleteTaskButtonElement = (task) => {
  const deleteTaskButtonElement = document.createElement('button')
  // deleteTaskButtonElement.textContent = '🗑'
  deleteTaskButtonElement.innerHTML = '&#x2715;'
  deleteTaskButtonElement.setAttribute('data-index', task.id)
  deleteTaskButtonElement.setAttribute('class', 'button btn-danger')
  addEventListenerToButton(deleteTaskButtonElement, 'delete')
  return deleteTaskButtonElement
}

// -- Event Listeners -------------------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const data = getTasksFromStorage()
  if (!data) {
    saveTasksInStorage(tasksList/*[] by default*/)
  } else {
    tasksList = data
    renderTasks()
  }
})

addTaskButton.addEventListener('click', () => {
  handleAddTask()
})

taskDescInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') handleAddTask()
})

const addEventListenerToButton = (button, action) => {
  button.addEventListener('click', (event) => {
    const taskId = event.target.getAttribute('data-index')
    if (action === 'complete') toggleCompleteTask(taskId)
      if (action === 'delete')
        if (confirm('¿Estás seguro de eliminar esta tarea?')) deleteTask(taskId)
    renderTasks()
  })
}

// -- Data persistency on the browser ---------------------------------------------
const tasksStorageKey = 'tasks'
const getTasksFromStorage = () => JSON.parse(localStorage.getItem(tasksStorageKey))
const saveTasksInStorage = (tasks) => localStorage.setItem(tasksStorageKey, JSON.stringify(tasks))