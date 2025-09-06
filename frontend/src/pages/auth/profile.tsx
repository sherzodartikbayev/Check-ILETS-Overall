import { Card, CardContent } from '@/components/ui/card'
import type { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import type { IUser } from '@/types'
import { Button } from '@/components/ui/button'
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { logoutUser } from '@/slices/auth.slice'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'

function Profile() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const user: IUser = useSelector((state: RootState) => state.auth.user)!

	if (!user) {
		return <p className='text-center mt-10'>Please login first</p>
	}

	const onLogout = () => {
		dispatch(logoutUser())
		toast.success('Successfully logout!')
		navigate('/login')
	}

	return (
		<section>
			<div className='container max-w-8xl px-5 mx-auto w-full min-h-[90vh] flex items-center justify-center'>
				<Card className='max-w-lg py-10 w-full border'>
					<CardContent className='flex flex-col justify-between min-h-80 md:min-h-96'>
						<h2 className='text-lg font-bold md:text-2xl'>Your Profile</h2>

						<div className='flex flex-col gap-5 md:gap-8'>
							<div className='flex items-center justify-between gap-2 border-b text-base md:text-lg'>
								<p>Username:</p>
								<strong>{user.user.username}</strong>
							</div>
							<div className='flex items-center justify-between gap-2 border-b text-base md:text-lg'>
								<p>Email:</p>
								<strong>{user.user.email}</strong>
							</div>
							<div className='flex items-center justify-between gap-2 border-b text-base md:text-lg'>
								<p>First Name:</p>
								<strong>{user.user.firstName}</strong>
							</div>
							<div className='flex items-center justify-between gap-2 border-b text-base md:text-lg'>
								<p>Last Name:</p>
								<strong>{user.user.lastName}</strong>
							</div>
						</div>

						<AlertDialog>
							<AlertDialogTrigger asChild>
								<Button variant='destructive' className='w-full'>
									Logout
								</Button>
							</AlertDialogTrigger>
							<AlertDialogContent>
								<AlertDialogHeader>
									<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
									<AlertDialogDescription>
										This action cannot be undone. This will permanently delete
										your account and remove your data from our servers.
									</AlertDialogDescription>
								</AlertDialogHeader>
								<AlertDialogFooter>
									<AlertDialogCancel>Cancel</AlertDialogCancel>
									<AlertDialogAction
										className='bg-destructive hover:bg-destructive/80'
										onClick={() => onLogout()}
									>
										Continue
									</AlertDialogAction>
								</AlertDialogFooter>
							</AlertDialogContent>
						</AlertDialog>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}

export default Profile
