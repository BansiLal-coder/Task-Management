// JavaScript code to handle task creation and display
document.addEventListener('DOMContentLoaded', function () {
  const taskForm = document.getElementById('taskForm')
  const taskList = document.getElementById('taskList')
  const taskListSidebar = document.getElementById('taskListSidebar')
  const toggleSidebarButton = document.getElementById('toggleSidebar')
  const clearButton = document.getElementById('clearTaskList')

  taskForm.addEventListener('submit', function (e) {
    e.preventDefault()
    const taskName = document.getElementById('taskName').value
    const taskDescription = document.getElementById('taskDescription').value
    const assignee = document.getElementById('assignee').value
    const priority = document.getElementById('priority').value

    // Create a new task item
    const taskItem = document.createElement('li')
    taskItem.innerHTML = `<strong>${taskName}</strong> - Assigned to: ${assignee} - Priority: ${priority}<br>${taskDescription}`

    // Add the task to the task list
    taskList.appendChild(taskItem)

    taskForm.reset()
  })

  // Toggle task list sidebar
  toggleSidebarButton.addEventListener('click', function () {
    taskListSidebar.classList.toggle('show-sidebar')
  })

  // Clear task list
  clearButton.addEventListener('click', function () {
    taskList.innerHTML = ''
  })
})
