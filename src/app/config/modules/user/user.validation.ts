import { z } from "zod";



// Define the Guardian schema
const guardianValidationSchema = z.object({
    fatherName: z.string(),
    motherName: z.string(),
    others: z.string(),
});

// Define the User schema
const userValidationSchema = z.object({
    id: z.string(),
    password: z.string().max(12),
    name: z.object({
        firstName: z.string().max(20),
        middleName: z.string(),
    }),
    email: z.string().email(),
    gender: z.enum(['male', 'female']),
    guardian: guardianValidationSchema,
});


export default userValidationSchema;