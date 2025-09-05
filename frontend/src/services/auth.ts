import type { userLogin, userRegister } from '@/types/service'
import axios from './api'

const AuthService = {
	async userRegister(user: userRegister) {
		const { data } = await axios.post('/auth/register', user)
		return data
	},

	async userLogin(user: userLogin) {
		const { data } = await axios.post('/auth/login', user)
		return data
	},
}

export default AuthService
