import type { Request } from 'express'

/* eslint-disable import/prefer-default-export */
export const getFlashFormValues = (req: Request): Record<string, string | string[]> => {
  return (req.flash('formValues')?.[0] as unknown as Record<string, string | string[]>) || {}
}
