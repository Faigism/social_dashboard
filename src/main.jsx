import ReactDOM from 'react-dom/client'
import './index.css'
import router, { RouterProvider } from './router'
import { PostProvider } from './contexts/PostContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <PostProvider>
    <RouterProvider router={router} />
  </PostProvider>
)
