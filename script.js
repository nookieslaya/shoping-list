const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')

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

itemForm.addEventListener('submit', addItem)
