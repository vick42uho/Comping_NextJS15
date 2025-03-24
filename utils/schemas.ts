import { z, ZodSchema } from 'zod'

// const createProfileSchema = z.string().min(2,{message:'อักขระต้องมากกว่า 2 ตัว'})
export const createProfileSchema = z.object({
    firstName: z.string().min(2, { message: 'ชื่อ ต้องมากกว่า 2 ตัว' }),
    lastName: z.string().min(2, { message: 'นามสกุล ต้องมากกว่า 2 ตัว' }),
    userName: z.string().min(2, { message: 'username ต้องมากกว่า 2 ตัว' }),
})



export const validateWithZod = <T>(schema: ZodSchema<T>, data: unknown): T => {
    const result = schema.safeParse(data);
    if (!result.success) {
      // code
      const errors = result.error?.errors.map((error) => error.message);
      throw new Error(errors.join(","));
    }
    return result.data;
  }