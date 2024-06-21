import PostItem from './PostItem'
import { nanoid } from 'nanoid'
import styles from './style.module.css'
import usePosts from '../../../hooks/usePosts'

const Posts = () => {
  const { posts, activePostId, toggleCommentVisibility } = usePosts()

  return (
    <div className={styles.posts}>
      {posts.map((post) => (
        <PostItem
          key={nanoid()}
          post={post}
          showComments={activePostId === post.id}
          toggleCommentVisibility={toggleCommentVisibility}
        />
      ))}
    </div>
  )
}
export default Posts
