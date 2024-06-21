import { createContext, useEffect, useState } from 'react'
import { database, onValue, ref } from '../config/firebase'
import PostMapper from '../pages/Home/dto/PostMapper'

const Context = createContext()

const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([])

  const getPosts = () => {
    const postsRef = ref(database, 'posts')
    onValue(postsRef, (snapshot) => {
      const data = PostMapper(snapshot.val())
      setPosts(data || [])
    })
  }

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <Context.Provider value={{ posts, setPosts }}>{children}</Context.Provider>
  )
}

export { Context, PostProvider }
