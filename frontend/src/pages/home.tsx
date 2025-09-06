import { Button } from '@/components/ui/button'
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'
import { cardsData } from '@/constants'
import TestService from '@/services/test'
import type { RootState } from '@/store'
import type { TestTypes } from '@/types'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function Home() {
	const user = useSelector((state: RootState) => state.auth.user)!
	const navigate = useNavigate()

	const handleStart = async (testType: TestTypes) => {
		if (!user) {
			toast.error('Please login first!')
			navigate('/login')
		}

		try {
			await TestService.startSession(testType)
			toast.success(`Test ${testType} started successfully!`)
			navigate(`/${testType}`)
		} catch (error) {
			const result = error as Error
			toast.error(result.message)
		}
	}

	return (
		<section className=''>
			<div className='container max-w-7xl mx-auto px-5 md:px-20 max-md:py-16 w-full min-h-[90vh] flex items-center justify-center flex-col'>
				<h1 className='font-inter font-extrabold text-2xl md:text-4xl mb-5'>
					Improve Your <span className='text-brand-primary'>IELTS</span>{' '}
					Performance
				</h1>

				<p className='text-lg md:text-xl font-semibold text-brand-gray text-center max-w-4xl mb-10 max-sm:text-left'>
					Check your IELTS level today! Complete Writing, Reading, Listening,
					and Speaking tests, then discover your overall band score.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
					{cardsData.map(card => (
						<Card key={card.id}>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<card.icon />
									<h3 className='text-2xl font-medium'>{card.title}</h3>
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-base'>{card.duration}</p>
								<p className='text-sm text-muted-foreground'>
									{card.description}
								</p>
							</CardContent>
							<CardFooter>
								<Button
									variant='primary'
									className='w-full'
									onClick={() =>
										handleStart(card.title.toUpperCase() as TestTypes)
									}
								>
									Start
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}

export default Home
