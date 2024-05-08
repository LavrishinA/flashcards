import { fileValidation } from '@/shared/lib/zodFileValidation'
import * as z from 'zod'

export const editProfileZodSchema = z.object({
  avatar: fileValidation,
  name: z.string(),
})
