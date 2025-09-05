import { Button } from '@/components/ui/button'
import { TriangleAlert } from 'lucide-react'
import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom'

function Error() {
	const error = useRouteError()

	console.log(error)

	if (isRouteErrorResponse(error)) {
		if (error.status === 404) {
			return (
				<section>
					<div className='max-w-5xl mx-auto w-full min-h-[90vh] flex items-center justify-center flex-col gap-5'>
						<img src='/images/not-found.png' alt='Page Not Found' width={400} />
						<p className='text-base md:text-lg max-w-sm md:max-w-lg text-center'>
							404 Error: Page not found. But don't worry, our developers are on
							a treasure hunt to recover it. Meanwhile, enjoy some virtual tea
							and biscuits!
						</p>
						<Link to='/' className='btn'>
							<Button variant='primary'>Go To Home</Button>
						</Link>
					</div>
				</section>
			)
		}
	}

	return (
		<section>
			<div className='max-w-5xl mx-auto w-full min-h-[90vh] flex items-center justify-center flex-col gap-5'>
				<TriangleAlert className='size-32 text-brand-primary' />
				<p className='text-base md:text-lg max-w-sm md:max-w-lg text-center'>
					Oops! Looks like our web page did a somersault and landed in a digital
					rabbit hole. We're working on untangling the code. Hang tight!
				</p>
				<Link to='/' className='btn'>
					<Button variant='primary'>Go To Home</Button>
				</Link>
			</div>
		</section>
	)
}

export default Error
