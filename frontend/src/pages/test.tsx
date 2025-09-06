/* eslint-disable react-hooks/exhaustive-deps */
import TestService from '@/services/test'
import type { TestTypes } from '@/types'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner'

function Test() {
	const { test } = useParams()
	const testType = test?.toUpperCase()

	const [questions, setQuestions] = useState()

	const getTest = async () => {
		try {
			const data = await TestService.getQuestions(testType as TestTypes)
			setQuestions(data)
			console.log(questions)
		} catch (error) {
			const res = error as Error
			toast.error(res.message)
		}
	}

	useEffect(() => {
		getTest()
	}, [])

	return (
		<section>
			<div className='container max-w-8xl px-5 md:px-20 py-5 mx-auto w-full min-h-[90vh]'>
				<h1 className='text-2xl font-semibold capitalize'>
					{test?.toLowerCase()}
				</h1>
			</div>
		</section>
	)
}

export default Test
