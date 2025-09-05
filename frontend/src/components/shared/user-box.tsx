import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import type { IUserDetail } from '@/types'
import AuthService from '@/services/auth'
import { useDispatch } from 'react-redux'
import { logoutUser } from '@/slices/auth.slice'
import { toast } from 'sonner'

interface Props {
	user: IUserDetail
}

function UserBox({ user }: Props) {
	const dispatch = useDispatch()

	const onLogout = async () => {
		try {
			await AuthService.userLogout(user.id!)
			toast.success('Successfully logout!')
			dispatch(logoutUser())
		} catch (error) {
			const result = error as Error
			toast.error(result.message)
		}
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className='size-10 cursor-pointer border'>
					<AvatarFallback>
						{user.firstName[0]}
						{user.lastName[0]}
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className='w-80'
				align='start'
				alignOffset={11}
				forceMount
			>
				<div className='flex flex-col space-y-4 p-2'>
					<p className='text-xs font-medium leading-none text-foreground'>
						{user.email}
					</p>

					<div className='flex items-center gap-x-2'>
						<div className='space-y-1'>
							<p className='line-clamp-1 font-space-grotesk text-sm'>
								{user.firstName} {user.lastName}
							</p>
						</div>
					</div>
				</div>

				<DropdownMenuSeparator />

				<DropdownMenuItem asChild className='w-full cursor-pointer'>
					<Button
						variant='destructive'
						className='h-8'
						onClick={() => onLogout()}
					>
						Logout
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserBox
