import * as z from 'zod'

const ACCEPTED_IMAGE_MIME_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']
const MAX_FILE_SIZE = 1024 * 1024 * 5

export const CreateDeckZodSchema = z
  .object({
    cover: z
      .optional(z.any())
      .refine(file => {
        if (!file || !file[0]) {
          return true
        }

        return file[0].size <= MAX_FILE_SIZE
      }, `Max image size is 5MB.`)
      .refine(file => {
        if (!file || !file[0]) {
          return true
        }

        return ACCEPTED_IMAGE_MIME_TYPES.includes(file[0].type)
      }, 'Only .jpg, .jpeg, .png and .webp formats are supported.'),
    isPrivate: z.boolean().default(false),
    name: z.string(),
  })
  .refine(data => data.name.length > 2, {
    message: 'Field Name Pack must contain at least 3 character(s)',
    path: ['name'],
  })
