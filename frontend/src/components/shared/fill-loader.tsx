import { Skeleton } from '../ui/skeleton'
import { Loader2 } from 'lucide-react'

function FillLoader() {
	return (
		<Skeleton className='absolute inset-0 z-50 flex size-full items-center justify-center opacity-20'>
			<Loader2 className='animate-spin' />
		</Skeleton>
	)
}

export default FillLoader
