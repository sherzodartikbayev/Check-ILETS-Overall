import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import type z from 'zod'
import { registerSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import AuthService from '@/services/auth'
import { toast } from 'sonner'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '@/store'
import FillLoader from '../shared/fill-loader'
import {
	signUserFailure,
	signUserSuccess,
	signUserStart,
} from '@/slices/auth.slice'
import { useNavigate } from 'react-router-dom'

function RegisterForm() {
	const navigate = useNavigate()

	const { isLoading } = useSelector((state: RootState) => state.auth)
	const dispatch = useDispatch()

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			username: '',
			email: '',
			password: '',
			firstName: '',
			lastName: '',
		},
	})

	const onSubmit = async (values: z.infer<typeof registerSchema>) => {
		try {
			dispatch(signUserStart())
			const data = await AuthService.userRegister(values)
			dispatch(signUserSuccess(data))
			toast.success('Successfully registered!')
			navigate('/')
		} catch (error) {
			const result = error as Error
			dispatch(signUserFailure(result.message))
			toast.error(result.message)
		}
	}

	return (
		<Form {...form}>
			{isLoading && <FillLoader />}
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
				<FormField
					control={form.control}
					name='username'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input placeholder='Username' disabled={isLoading} {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Email'
									type='email'
									disabled={isLoading}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Password'
									type='password'
									disabled={isLoading}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='firstName'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='First Name'
									disabled={isLoading}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name='lastName'
					render={({ field }) => (
						<FormItem>
							<FormControl>
								<Input
									placeholder='Last Name'
									disabled={isLoading}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					type='submit'
					variant='primary'
					disabled={isLoading}
					className='w-full'
				>
					Register
				</Button>
			</form>
		</Form>
	)
}

export default RegisterForm
