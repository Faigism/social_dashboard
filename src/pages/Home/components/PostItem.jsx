import styles from './style.module.css'
import { database, get, ref, set } from '../../../config/firebase'
import { useEffect, useState } from 'react'
import ActionButton from './ActionButton'
import Comments from './Comments'

const PostItem = ({ post, toggleCommentVisibility, showComments }) => {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(post.likes)

  const like = () => {
    const postRef = ref(database, `posts/${post.id}/likes`)
    const newLikeValue = isLiked ? likes - 1 : likes + 1
    setIsLiked(!isLiked)
    setLikes(newLikeValue)
    console.log(isLiked)
    set(postRef, newLikeValue)
  }

  const repost = () => {
    const postRef = ref(database, `posts/${post.id}/repost`)
    set(postRef, post.repost + 1)
  }

  return (
    <div className={styles.postItem}>
      {post.text}
      <div className={styles.actionBar}>
        <ActionButton title={`Likes ${post.likes}`} onClick={like} />
        <ActionButton
          title={`Comments ${post.comments.length}`}
          onClick={() => toggleCommentVisibility(post.id)}
        />
        <ActionButton title={`Repost: ${post.repost}`} onClick={repost} />
      </div>
      {showComments && (
        <Comments
          comments={post.comments}
          onClick={() => toggleCommentVisibility(post.id)}
        />
      )}
    </div>
  )
}
export default PostItem
