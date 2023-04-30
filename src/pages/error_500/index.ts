import { PageError } from '../../shared'

export const page500 = new PageError({
  code: 500,
  server: true
})
