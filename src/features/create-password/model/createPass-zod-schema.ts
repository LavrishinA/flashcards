import { z } from 'zod'

export const createPassZodSchema = z.object({
  password: z.string().min(3),
})
