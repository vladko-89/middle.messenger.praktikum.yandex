import { METHOD, type Options, type OptionsWithoutMethod } from '../types/request'
import { getQuery } from './stringHelper'

export class HTTPTransport {
  async get (url: string, options: OptionsWithoutMethod = {}) {
    return await this.request(url, { ...options, method: METHOD.GET })
  }

  async post (url: string, options: OptionsWithoutMethod = {}) {
    return await this.request(url, { ...options, method: METHOD.POST })
  }

  async put (url: string, options: OptionsWithoutMethod = {}) {
    return await this.request(url, { ...options, method: METHOD.PUT })
  }

  async patch (url: string, options: OptionsWithoutMethod = {}) {
    return await this.request(url, { ...options, method: METHOD.PATCH })
  }

  async delete (url: string, options: OptionsWithoutMethod = {}) {
    return await this.request(url, { ...options, method: METHOD.DELETE })
  }

  async request (
    url: string,
    { method = METHOD.GET, data, headers = {} }: Options
  ) {
    return await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      const isGetRequest = method === METHOD.GET
      const isGetRequestWithQuery = isGetRequest && data

      Object.entries(headers).forEach(([k, v]) => {
        xhr.setRequestHeader(k, v)
      })

      xhr.open(
        method,
        (isGetRequestWithQuery && `${url}${getQuery(data)}`) || url
      )

      if (isGetRequest) {
        xhr.send()
      } else {
        xhr.send(JSON.stringify(data))
      }

      xhr.onload = () => {
        resolve(xhr)
      }

      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject
    })
  }
}
