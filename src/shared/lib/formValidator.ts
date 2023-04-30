
export class FormValidator {
  form: HTMLElement
  type: string
  _inputElements: HTMLElement[]
  button: HTMLElement
  constructor (form: HTMLElement, type: string) {
    this.form = form
    this.type = type
    this._inputElements = Array.from(this.form.querySelectorAll('.container'))
    this.button = this.form.querySelector('.chat__button_send')!
  }

  _showInputError (element: HTMLElement, errorMessage: string): void {
    const errorItem = element.querySelector('.error')

    if (errorItem) {
      errorItem.textContent = errorMessage
    }
  }

  _hideInputError (element: HTMLElement) {
    const errorItem = element.querySelector('.error')

    if (errorItem) {
      errorItem.textContent = ''
    }
  }

  isValid (inputItem: HTMLElement) {
    const input: HTMLInputElement = inputItem.querySelector('.input')!
    if (!input.validity.valid) {
      this._showInputError(inputItem, input.validationMessage)
    } else {
      this._hideInputError(inputItem)
    }
  }

  isValidForm () {
    this._inputElements.forEach(element => {
      this.isValid(element)
    })
  }

  _disableButton () {
    this.button.setAttribute('disabled', 'true')
  }

  _enableButton () {
    this.button.setAttribute('disabled', '')
  }

  setButtonState () {
    if (this.type === 'message' && this._inputElements[0].querySelector('input')!.value) {
      this._disableButton()
    }
    this._enableButton()
  }
}
