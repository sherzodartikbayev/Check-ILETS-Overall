import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/root-layout'
import Error from './pages/error'
import Home from './pages/home'
import Reading from './pages/reading'
import Listening from './pages/listening'
import Writing from './pages/writing'
import Speaking from './pages/speaking'
import Register from './pages/auth/register'
import Login from './pages/auth/login'

function App() {
	const route = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <Error />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/reading',
					element: <Reading />,
				},
				{
					path: '/listening',
					element: <Listening />,
				},
				{
					path: '/writing',
					element: <Writing />,
				},
				{
					path: '/speaking',
					element: <Speaking />,
				},
				{
					path: '/login',
					element: <Login />,
				},
				{
					path: '/register',
					element: <Register />,
				},
			],
		},
	])

	return <RouterProvider router={route} />
}

export default App
