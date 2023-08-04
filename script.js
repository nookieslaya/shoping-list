const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')

const clearBtn = document.getElementById('clear')

const itemFilter = document.getElementById('filter')

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
	checkUI()
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
		if (confirm('are you sure')) {
			e.target.parentElement.parentElement.remove()
			checkUI()
		}
	}
}

const clearItems = () => {
	if (confirm('Are u sure')) {
		while (itemList.firstChild) {
			itemList.removeChild(itemList.firstChild)
			checkUI()
		}
	}
}

const filterItems = e => {
	const items = itemList.querySelectorAll('li')
	const text = e.target.value.toLowerCase()

	items.forEach(item => {
		const itemName = item.firstChild.textContent.toLowerCase()

		if (itemName.indexOf(text) != -1) {
			console.log(true)
			item.style.display = 'flex'
		} else {
			item.style.display = 'none'
		}
	})
}

const checkUI = () => {
	const items = itemList.querySelectorAll('li')
	if (items.length === 0) {
		clearBtn.style.display = 'none'
		itemFilter.style.display = 'none'
	} else {
		clearBtn.style.display = 'block'
		itemFilter.style.display = 'block'
	}
}

itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)
itemFilter.addEventListener('input', filterItems)
checkUI()
