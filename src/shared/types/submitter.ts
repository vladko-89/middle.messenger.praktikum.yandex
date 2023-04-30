
export interface ISubmitter {
  form: HTMLElement
  _getInputValues: () => Record<string, string>
  submit: (e: Event) => void
}
