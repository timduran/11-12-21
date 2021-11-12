// <li class="list-group-item list-group-item-action d-flex justify-content-between align-items-start">
//   <div class="ms-2 me-auto">
//     <div>Take out trash</div>
//   </div>
//   <div class="itemBtn badge bg-success rounded-pill">
//     <img class="icon" src="./check-mark.png" alt="delete">
//   </div>
//   <div class="itemBtn badge bg-danger rounded-pill">
//     <img class="icon" src="./delete.png" alt="delete">
//   </div>
// </li>

// list of items to render on page load
const items = [
  {
    text: 'Take out trash',
    isDone: false
  },
  {
    text: 'Cook dinner',
    isDone: true
  },
  {
    text: 'Walk the dog',
    isDone: false
  },
  {
    text: 'Do laundry',
    isDone: true
  }
]

const renderItems = () => {
  document.getElementById('items').innerHTML = ''

  for (let i = 0; i < items.length; i++) {
    const itemElem = document.createElement('li')
    itemElem.className = 'list-group-item list-group-item-action d-flex justify-content-between align-items-start'

    if (items[i].isDone) {
      itemElem.classList.add('bg-success')
    }

    itemElem.innerHTML = `
    <div class="ms-2 me-auto">
    <div>${items[i].text}</div>
    </div>
    <div class="update itemBtn badge bg-success rounded-pill" data-index="${i}">
    <img class="update icon" src="./check-mark.png" alt="delete" data-index="${i}">
    </div>
    <div class="delete itemBtn badge bg-danger rounded-pill" data-index="${i}">
    <img class="delete icon" src="./delete.png" alt="delete" data-index="${i}">
    </div>
    `
    document.getElementById('items').append(itemElem)
  }
}
  
  document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()

  const item = {
    text: document.getElementById('item').value,
    isDone: false
  }

  items.push(item)

  renderItems()

  document.getElementById('item').value = ''
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('update')) {
    const index = parseInt(event.target.dataset.index)
    items[index].isDone = !items[index].isDone
    renderItems()
  }
})

document.addEventListener('click', event => {
  if (event.target.classList.contains('delete')) {
    const index = parseInt(event.target.dataset.index)
    items.splice(index, 1)
    renderItems()
  }
})

renderItems()
