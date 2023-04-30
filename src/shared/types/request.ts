export enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export interface Options {
  method: METHOD
  headers?: Record<string, string>
  timeout?: number
  data?: any
}

export type OptionsWithoutMethod = Omit<Options, 'method'>
