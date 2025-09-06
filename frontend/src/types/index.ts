import type { ReactNode } from 'react'

export interface IUser {
	access_token: string
	expires_in: number
	token_type: string
	user: IUserDetail
}

export interface IUserDetail {
	id?: string
	username: string
	email: string
	password: string
	firstName: string
	lastName: string
}

export interface ITestCard {
	id: number
	title: 'LISTENING' | 'READING' | 'WRITING' | 'SPEAKING'
	icon: ReactNode
	duration: string
	description: string
}

export type TestTypes = 'LISTENING' | 'READING' | 'WRITING' | 'SPEAKING'
