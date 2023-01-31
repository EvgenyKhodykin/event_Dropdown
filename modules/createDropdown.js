function createDropdown(id, options) {
    const rootDiv = document.createElement('div')
    rootDiv.className = `select-dropdown select-dropdown--${id}`

    const dropdownButton = document.createElement('button')
    dropdownButton.className = `select-dropdown__button select-dropdown__button--${id}`
    const spanInDropdownButton = document.createElement('span')
    spanInDropdownButton.className = `select-dropdown__text select-dropdown__text--${id}`
    spanInDropdownButton.innerText = 'Выберите элемент'
    dropdownButton.append(spanInDropdownButton)

    const dropdownList = document.createElement('ul')
    dropdownList.className = `select-dropdown__list select-dropdown__list--${id}`
    
    options.forEach(item => {
        const li = document.createElement('li')
        li.className = 'select-dropdown__list-item'
        li.dataset.value = item.value
        li.innerText = item.text
        dropdownList.append(li)
    })    
    rootDiv.append(dropdownButton,dropdownList)
    return rootDiv
}

export default createDropdown