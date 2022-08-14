// == Get DOM elements ============================================================
const taskDescInput = document.querySelector('#todo-input')
const addTaskButton = document.querySelector('#add-todo')
const tasksContainer = document.querySelector('#list-todo')
const completeAllTasksButton = document.querySelector('#complete-all-tasks')
const deleteAllTasksButton = document.querySelector('#clear-tasks')
const listContainer = document.querySelector('.list-container')
const addToAllTasks = document.querySelector('#add-to-all-tasks')
const cardsContainer = document.querySelector("#tasks-container")
const cardTask = document.querySelector("#card-task")
const deleteTaskList = document.querySelector("#btn-delete-task-list")
const titleListTasksInput = document.querySelector("#title-input")

// == Global variable =============================================================
let allTaskList = []
let tasksList = []
let editFlag = false
let editIdList = ''

// == Functions ===================================================================
// -- Event Listener Handlers -----------------------------------------------------
const handleAddTask = () => {
  const taskValue = getInputValue(taskDescInput)
  addTask(taskValue)
  renderTasks()
  resetInputValue(taskDescInput)
}

const handleAddAllTasksToList = () =>{
  const titleListTask = getInputValue(titleListTasksInput)
  addAllList(titleListTask)
  renderListTasks()
  resetInputValue(titleListTasksInput)
}

// -- Utils -----------------------------------------------------------------------
const clearCards = (node) =>{
  node.innerHTML = ''
}

const clearNodeChilds = (node) => {
  node.innerHTML = ''
}

const resetInputValue = (inputNode) => {
  inputNode.value = ''
}

const setLabelValue = (node, value) => node.innerHTML = value

const setInputValue = (inputNode, value) => inputNode.value = value

const getInputValue = (inputNode) => inputNode.value

const generateRandomId = () => String(Math.random() * 1000000)

// -- Task - based ----------------------------------------------------------------
const addAllList = (title) =>{
  if(!editFlag){
    allTaskList.push({id: generateRandomId(), title:title, list: tasksList})
  } else{
    const taskIndex = allTaskList.findIndex((allTaskList) => allTaskList.id === editIdList)
    allTaskList.splice(taskIndex, 1)
    saveAllTasksInStorage(allTaskList)
    allTaskList.push({id: generateRandomId(), title:title, list: tasksList})
    editFlag = false
    editIdList = ''
  }
  
  saveAllTasksInStorage(allTaskList)
}

const addTask = (description, isCompleted = false) => {
  tasksList.push({ id: generateRandomId(), description, isCompleted })
  saveTasksInStorage(tasksList)
}

const toggleCompleteTask = (taskId) => {
  const task = tasksList.find((taskList) => taskList.id === taskId)
  task.isCompleted = !task.isCompleted
  saveTasksInStorage(tasksList)
}

const completeAllTasks = () => {
  tasksList.forEach(task => {
    task.isCompleted = true
  })
  saveTasksInStorage(tasksList)
}

const deleteTask = (taskId) => {
  const taskIndex = tasksList.findIndex((taskList) => taskList.id === taskId)
  tasksList.splice(taskIndex, 1)
  saveTasksInStorage(tasksList)
}

const deleteItemTaskList = (taskId) => {
  const taskIndex = allTaskList.findIndex((allTaskList) => allTaskList.id === taskId)
  allTaskList.splice(taskIndex, 1)
  saveAllTasksInStorage(allTaskList)
}

const getTasksList = (taskId) => {
  const taskList = getAllTasksFromStorage()
  const taskIndex = taskList.find((taskList) => taskList.id === taskId)
  return taskIndex
}

const clearTasks = () => {
  tasksList = []  
  saveTasksInStorage(tasksList)
}

const isTaskCompleted = (task) => task.isCompleted

const getSatusTasks = (task) => {
  let flag = 'completada'
  if(task){
    task.list.forEach((i) => {
      if(i.isCompleted === false){
        flag = 'pendiente'
      }else{
        flag = 'completada'
      }
    })
  }
  return flag
}

// -- DOM manipulation ------------------------------------------------------------
const renderTasks = () => {
  clearNodeChilds(tasksContainer)
  tasksList.forEach(generateTaskElements)

  editFlag === true ? setLabelValue(addToAllTasks, 'editar lista') : setLabelValue(addToAllTasks, 'agregarg lista')
  if (tasksList.length === 0) {
    listContainer.setAttribute('style', 'display: none;');
  } else {
    listContainer.setAttribute('style', 'display: flex;');
  }
}

const renderListTasks = () =>{
  clearCards(cardsContainer)
  
  allTaskList.forEach(generateCardTask)
  tasksList = []
  renderTasks()
  clearTasks()
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

const generateCardTask = (task) => {
  const cardListTasks = document.createElement('div')
  cardListTasks.setAttribute('data-index', task.id)
  cardListTasks.setAttribute('id', 'card-task')
  cardListTasks.setAttribute('class', 'card-task')
  const titleCard = generateCardTaskTitle(task)
  const bodyCard = generateCardBody(task)
  const footerCard = generateCardFooter(task)
  cardListTasks.append(titleCard, bodyCard, footerCard)
  addEventListenerEditTasksCard(cardListTasks)
  cardsContainer.appendChild(cardListTasks)
}

const generateCardTaskTitle = (task) =>{
  const titleCard = document.createElement('div')
  titleCard.setAttribute('data-index', task.id)
  titleCard.setAttribute('class', 'title-card')
  titleCard.textContent = task.title
  return titleCard
}

const generateCardBody = (task) =>{
  const bodyCard = document.createElement('div')
  bodyCard.setAttribute('data-index', task.id)
  bodyCard.setAttribute('class', 'body-card')
  task.list.map(i => {
    bodyCard.appendChild(generateSpanBodyCard(i,task))
  })
  return bodyCard
}

// const generateItemBodyCard = (task) =>{
//   const listItem = document.createElement('li')
//   listItem.setAttribute('data-index', task.id)
// }

const generateSpanBodyCard = (item, task) => {
  const listItem = document.createElement('li')
  listItem.setAttribute('data-index', task.id)
  const spanElement = document.createElement('span')
  spanElement.setAttribute('data-index', task.id)
  spanElement.textContent = item.description
  listItem.append(spanElement)
  return listItem
}

const generateCardFooter = (task) =>{
  const divButton = document.createElement('div')
  divButton.setAttribute('data-index', task.id)
  divButton.setAttribute('class', 'footer-card')
  const deleteButton = document.createElement('button')
  deleteButton.setAttribute('data-index', task.id)
  deleteButton.setAttribute('id', 'btn-delete-task-list')
  deleteButton.setAttribute('class', 'button btn-text')
  deleteButton.style = 'font-size: 1.2rem'
  deleteButton.textContent = 'Eliminar'
  addEventListenerToDeleteAllTasksButton(deleteButton)
  const labelStatus = generateStatuslabel(task)
  divButton.append(labelStatus, deleteButton)
  return divButton
}

const generateStatuslabel = (task) => {
  const labelStatus = document.createElement('span')
  const status = getSatusTasks(task)
  labelStatus.setAttribute('data-index', task.id)
  labelStatus.setAttribute('class', `lbl-status lbl-status-${status}`)
  labelStatus.style = 'font-size: 1.2rem'
  labelStatus.textContent = status
  return labelStatus
}

// -- Event Listeners -------------------------------------------------------------

// Event Listener to get the tasks from local storage
// when the DOM content is loaded (i.e. page is ready)
document.addEventListener('DOMContentLoaded', () => {
  const tasks = getTasksFromStorage()
  if (!tasks) {
    saveTasksInStorage(tasksList/*[] by default*/)
  } else {
    tasksList = tasks
    renderTasks()
  }

  const allTasks = getAllTasksFromStorage()
  if(!allTasks){
    saveAllTasksInStorage(allTaskList)
  } else{
    allTaskList = allTasks
    renderListTasks()
  }
})

// event listener to add task when button is clicked
addTaskButton.addEventListener('click', () => {
  handleAddTask()
})

addToAllTasks.addEventListener('click', () => {
  handleAddAllTasksToList()
})

// event listener to add task when button is clicked
taskDescInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') handleAddTask()
})

// event listener to complete all tasks when button is clicked
completeAllTasksButton.addEventListener('click', () => {
  completeAllTasks()
  renderTasks()
})

deleteAllTasksButton.addEventListener('click', () => {
  if (confirm('¿Estás seguro de eliminar TODAS las tareas?')) {
    clearTasks()
    renderTasks()
  }
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

const addEventListenerToDeleteAllTasksButton = (button) => {
  button.addEventListener('click', (event) => {
    const taskListId = event.target.getAttribute('data-index')
    if (confirm('¿Deseas eliminar esta lista de tareas?')) deleteItemTaskList(taskListId)
    renderListTasks()
  })
}

const addEventListenerEditTasksCard = (div) => {
  div.addEventListener('click', (event) => {
    const taskListId = event.target.getAttribute('data-index')
    const tasksListGet = getTasksList(taskListId)
    if(tasksListGet){
      saveTasksInStorage(tasksListGet.list)
      tasksList = tasksListGet.list
      editFlag = true
      editIdList = tasksListGet.id
      renderTasks()
      setInputValue(titleListTasksInput, tasksListGet.title)
      setLabelValue(addToAllTasks, 'editar lista')
    }

  })
}

// -- Data persistency on the browser ---------------------------------------------
const tasksStorageKey = 'tasks'
const allTasksStorageKey = 'allTasks'

const getTasksFromStorage = () => JSON.parse(localStorage.getItem(tasksStorageKey))
const getAllTasksFromStorage = () => JSON.parse(localStorage.getItem(allTasksStorageKey))

const saveTasksInStorage = (tasks) =>
  localStorage.setItem(tasksStorageKey, JSON.stringify(tasks))

const saveAllTasksInStorage = (allTasks) => 
  localStorage.setItem(allTasksStorageKey, JSON.stringify(allTasks))