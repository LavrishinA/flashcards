import { fileValidation } from '@/shared/lib/zodFileValidation'
import * as z from 'zod'

export const DeckFormZodSchema = z
  .object({
    cover: fileValidation,
    isPrivate: z.boolean().default(false),
    name: z.string(),
  })
  .refine(data => data.name.length > 2, {
    message: 'Field Name must contain at least 3 character(s)',
    path: ['name'],
  })
  .refine(data => data.name.length < 30, {
    message: 'Field Name  must contain max 30 character(s)',
    path: ['name'],
  })
