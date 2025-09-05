import { Link } from 'react-router-dom'
import { Button } from '../ui/button'
import { useSelector } from 'react-redux'
import type { RootState } from '@/store'
import type { IUser } from '@/types'
import UserBox from '../shared/user-box'

function Navbar() {
	const user: IUser = useSelector((state: RootState) => state.auth.user)!

	return (
		<header className='fixed inset-0 h-16 z-50'>
			<div className='container max-w-8xl mx-auto w-full h-full border-b px-5 md:px-20 flex items-center justify-between backdrop-blur-md'>
				{/* Logo */}
				<Link
					to='/'
					className='text-lg md:text-xl font-inter font-bold text-brand-primary select-none'
				>
					Check ILETS Overall
				</Link>

				{user ? (
					<UserBox user={user} />
				) : (
					<>
						{/* Register Btns */}
						<div className='flex items-center gap-2'>
							<Link to='/login'>
								<Button
									variant='outline'
									rounded='rounded-full'
									className='px-5'
								>
									Login
								</Button>
							</Link>
							<Link to='/register'>
								<Button
									variant='primary'
									rounded='rounded-full'
									className='px-5'
								>
									Register
								</Button>
							</Link>
						</div>
					</>
				)}
			</div>
		</header>
	)
}

export default Navbar
