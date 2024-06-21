import { useContext, useState } from 'react'
import { Context } from '../contexts/PostContext'

const usePosts = () => {
  const { posts, setPosts } = useContext(Context)
  const [activePostId, setActivePostId] = useState(null)

  const toggleCommentVisibility = (postId) => {
    if (activePostId === postId) {
      setActivePostId(null)
    } else {
      setActivePostId(postId)
    }
  }

  return { posts, setPosts, activePostId, toggleCommentVisibility }
}

export default usePosts
