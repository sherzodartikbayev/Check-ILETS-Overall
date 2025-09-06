import axios from 'axios'

const api = axios.create({
	baseURL: 'http://213.171.7.16:3000/api',
})

api.interceptors.request.use(config => {
	const authData = JSON.parse(localStorage.getItem('persist:auth') || '{}')
	const user = authData.user ? JSON.parse(authData.user) : null
	const token = user?.access_token

	if (token) {
		config.headers.Authorization = `Bearer ${token}`
	}

	return config
})

export default api
