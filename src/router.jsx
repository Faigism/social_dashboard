import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreatePost from './pages/CreatePost'
import Home from './pages/Home'

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/create-post',
    element: <CreatePost />,
  },
])

export { RouterProvider }
