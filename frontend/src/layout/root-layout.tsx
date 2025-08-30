import Navbar from '@/components/layout/navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
	return (
		<>
			<Navbar />
			<main className='mt-16'>
				<Outlet />
			</main>
		</>
	)
}

export default RootLayout
