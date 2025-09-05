import LoginForm from '@/components/forms/login-form'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { useNavigate } from 'react-router-dom'

function Login() {
	const navigate = useNavigate()

	return (
		<section>
			<div className='container max-w-8xl mx-auto w-full min-h-[90vh] flex items-center justify-center'>
				<Card className='relative w-full max-w-sm'>
					<CardHeader>
						<CardTitle className='text-xl text-center'>
							Enter Your Account
						</CardTitle>
						<CardDescription className='text-center'>
							Start your IELTS preparation journey today with full access to our
							platform
						</CardDescription>
					</CardHeader>
					<CardContent>
						<LoginForm />
					</CardContent>
					<CardFooter className='flex-col gap-2'>
						<p className='text-muted-foreground'>
							Don't have an account?{' '}
							<span
								className='text-blue-500 cursor-pointer hover:underline'
								onClick={() => navigate('/register')}
							>
								Register
							</span>
						</p>
					</CardFooter>
				</Card>
			</div>
		</section>
	)
}

export default Login
