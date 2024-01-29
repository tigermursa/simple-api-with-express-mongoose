import { z } from "zod";



// Define the Guardian schema
// const guardianValidationSchema = z.object({
//     fatherName: z.string(),
//     motherName: z.string(),
//     others: z.string(),
// });

// Define the User schema
// const userValidationSchema = z.object({
//     // id: z.string(),
//     // password: z.string().max(12),
//     // name: z.object({
//     //     firstName: z.string().max(20),
//     //     lastName: z.string(),
//     // }),
//     // email: z.string().email(),
//     // gender: z.enum(['male', 'female']),
//     // guardian: guardianValidationSchema,

// })

const userValidationSchema = z.object({
    id: z.string().refine((data) => data.trim() !== '', { message: 'id is required' }),
    password: z.string().refine((data) => data.trim() !== '', { message: 'password is required' }),
    name: z.string().refine((data) => data.trim() !== '', { message: 'name is required' }),
    email: z.string().refine((data) => data.trim() !== '', { message: 'email is required' }),
    isDeleted: z.boolean().default(false),
});


export default userValidationSchema;