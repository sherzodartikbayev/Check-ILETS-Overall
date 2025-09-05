import { z } from 'zod'

export const registerSchema = z.object({
	username: z.string().min(2).max(50),
	email: z.string().email(),
	password: z.string().min(6),
	firstName: z.string().min(2),
	lastName: z.string().min(2),
})

export const loginSchema = z.object({
	username: z.string().min(2).max(50),
	password: z.string().min(6),
})
