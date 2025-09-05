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
