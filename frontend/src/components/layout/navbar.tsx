import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

function Navbar() {
	return (
		<header className='fixed inset-0 h-16 z-50'>
			<div className='container max-w-8xl mx-auto w-full h-full border-b px-20 flex items-center justify-between backdrop-blur-md'>
				{/* Logo */}
				<Link
					to='/'
					className='text-xl font-inter font-bold text-brand-primary select-none'
				>
					Check ILETS Overall
				</Link>

				{/* Register Btns */}
				<div className='flex items-center gap-2'>
					<Link to='/login'>
						<Button variant='outline' rounded='rounded-full' className='px-5'>
							Login
						</Button>
					</Link>
					<Link to='/register'>
						<Button variant='primary' rounded='rounded-full' className='px-5'>
							Register
						</Button>
					</Link>
				</div>
			</div>
		</header>
	)
}

export default Navbar
