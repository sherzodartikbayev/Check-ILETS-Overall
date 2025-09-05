import { Input } from '../ui/input'
import { useForm } from 'react-hook-form'
import type z from 'zod'
import { loginSchema } from '@/lib/validation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../ui/button'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import AuthService from '@/services/auth'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '@/store'
import {
	signUserFailure,
	signUserStart,
	signUserSuccess,
} from '@/slices/auth.slice'
import FillLoader from '../shared/fill-loader'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
	const navigate = useNavigate()
	const { isLoading } = useSelector((state: RootState) => state.auth)
	const dispatch = useDispatch()

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			username: '',
			password: '',
		},
	})

	const onSubmit = async (values: z.infer<typeof loginSchema>) => {
		try {
			dispatch(signUserStart())
			const data = await AuthService.userLogin(values)
			dispatch(signUserSuccess(data))
			toast.success('Successfully login!')
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
			<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
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

				<Button
					type='submit'
					variant='primary'
					disabled={isLoading}
					className='w-full'
				>
					Login
				</Button>
			</form>
		</Form>
	)
}

export default LoginForm
