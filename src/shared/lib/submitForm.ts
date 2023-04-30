import { type ISubmitter } from '../types/submitter'

export class Submitter implements ISubmitter {
  form
  _inputs: HTMLInputElement[]
  constructor (form: HTMLElement) {
    this.form = form
    this._inputs = Array.from(this.form.querySelectorAll('.input'))
  }

  submit (e: Event): void {
    e.preventDefault()

    console.log(this._getInputValues())
  }

  _getInputValues () {
    const inputValues: Record<string, string> = {}

    this._inputs.forEach((input) => {
      inputValues[input.name] = input.value!
    })
    return inputValues
  }
}
