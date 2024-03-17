import { z } from 'zod'

export const signupZodSchema = z
  .object({
    confirm: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })
  .refine(
    values => {
      return values.password === values.confirm
    },
    {
      message: 'Passwords must match!',
      path: ['confirm'],
    }
  )
