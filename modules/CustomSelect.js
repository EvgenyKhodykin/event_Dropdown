import createDropdown from "./createDropdown.js"

class CustomSelect {
    #id
    #options
    #currentSelectedOption
    #isActive

    constructor(id,options) {
        this.#id = id
        this.#options = options
        this.#isActive = false
        this.#currentSelectedOption = null
    }
    
    get #getId() {
        return this.#id
    }

    get #getOptions() {
        return this.#options
    }

    set #setIsActive(value) {
        this.#isActive = value
    }

    get #getIsActive() {
        return this.#isActive
    }

    set #setSelectedValue(value) {
        this.#currentSelectedOption = value
    }

    get #selectedValue() {
        return this.#currentSelectedOption
    }

    render(container) {
        const dropdown = createDropdown(this.#getId, this.#getOptions)
        container.append(dropdown)
        
        const dropdownButton = container.querySelector('.select-dropdown__button')
        const dropdownList = container.querySelector('.select-dropdown__list')
        const nodeText = container.querySelector('.select-dropdown__text') 
        
        const switchList = () => {
            if (!this.#getIsActive) dropdownList.classList.add('active')       
            else dropdownList.classList.remove('active')
            this.#setIsActive = !this.#getIsActive
        }

        const handlerClick = (event) => {
            const clickedItem = event.target.closest('.select-dropdown__list-item')
            clickedItem.classList.add('selected')
            const itemDataValue = clickedItem.dataset.value
            this.#setSelectedValue = this.#getOptions.filter(item => item.value == itemDataValue)[0]
            nodeText.innerText = this.#selectedValue.text
            switchList()
        }    

        dropdownButton.addEventListener('click', switchList)
        dropdownList.addEventListener('click', handlerClick)

    }
}

export default CustomSelect