import { fileValidation } from '@/shared/lib/zodFileValidation'
import { z } from 'zod'

export const createCardZodSchema = z.object({
  answer: z.string().min(5),
  answerImg: fileValidation,
  question: z.string().min(5),
  questionImg: fileValidation,
})
