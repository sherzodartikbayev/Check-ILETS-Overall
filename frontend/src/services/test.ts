import type { TestTypes } from '@/types'
import axios from './api'

const TestService = {
	async startSession(testType: TestTypes) {
		const { data } = await axios.post('/tests/sessions/start', { testType })
		return data
	},

	async getQuestions(testType: TestTypes) {
		const { data } = await axios.get(`/tests/questions/${testType}`)
		return data
	},

	async getWritingPrompts() {
		const { data } = await axios.get('/tests/writing/prompts')
		return data
	},
}

export default TestService
