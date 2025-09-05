import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../ui/dropdown-menu'
import { Avatar, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import type { IUser } from '@/types'
import { Link } from 'react-router-dom'
import { User } from 'lucide-react'

interface Props {
	user: IUser
}

function UserBox({ user }: Props) {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Avatar className='size-10 cursor-pointer border'>
					<AvatarFallback>
						{user.user.firstName[0]}
						{user.user.lastName[0]}
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
						{user.user.email}
					</p>

					<div className='flex items-center gap-x-2'>
						<div className='space-y-1'>
							<p className='line-clamp-1 font-space-grotesk text-sm'>
								{user.user.firstName} {user.user.lastName}
							</p>
						</div>
					</div>
				</div>

				<DropdownMenuSeparator />

				<Link to='/profile'>
					<Button variant='outline' className='w-full h-8 my-1'>
						<User />
						Your Profile
					</Button>
				</Link>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserBox
