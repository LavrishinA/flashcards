import { z } from 'zod'

export const createCardZodSchema = z.object({
  answer: z.string().min(5),
  question: z.string().min(5),
})
