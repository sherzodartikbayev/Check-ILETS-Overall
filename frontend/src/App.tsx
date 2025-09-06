import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/root-layout'
import Error from './pages/error'
import Home from './pages/home'
import Login from './pages/auth/login'
import Profile from './pages/auth/profile'
import Test from './pages/test'
import Register from './pages/auth/register'

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
					path: ':test',
					element: <Test />,
				},
				{
					path: '/login',
					element: <Login />,
				},
				{
					path: '/register',
					element: <Register />,
				},
				{
					path: '/profile',
					element: <Profile />,
				},
			],
		},
	])

	return <RouterProvider router={route} />
}

export default App
