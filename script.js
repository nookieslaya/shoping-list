const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')

const clearBtn = document.getElementById('clear')

const addItem = e => {
	e.preventDefault()

	const newItem = itemInput.value

	if (newItem === '') {
		allert('wtf!')
	}
	const button = createButton('remove-item btn-link text-red')
	const li = document.createElement('li')
	const textValue = document.createTextNode(newItem)
	li.appendChild(textValue)
	li.appendChild(button)
	itemList.appendChild(li)
	console.log(li)
}

const createButton = classes => {
	const button = document.createElement('button')
	button.className = classes

	const icon = createIcon('fa-solid fa-xmark')
	button.appendChild(icon)
	return button
}

const createIcon = classes => {
	const icon = document.createElement('i')
	icon.className = classes

	return icon
}

const removeItem = e => {
	if (e.target.parentElement.classList.contains('remove-item')) {
		e.target.parentElement.parentElement.remove()
	}
}

const clearItems = () => {
	while (itemList.firstChild) {
		itemList.removeChild(itemList.firstChild)
	}
}

itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)
