import { fileValidation } from '@/shared/lib/zodFileValidation'
import * as z from 'zod'

export const DeckFormZodSchema = z
  .object({
    cover: fileValidation,
    isPrivate: z.boolean().default(false),
    name: z.string(),
  })
  .refine(data => data.name.length > 2, {
    message: 'Field Name Pack must contain at least 3 character(s)',
    path: ['name'],
  })
