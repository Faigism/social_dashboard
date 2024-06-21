import styles from './style.module.css'
import { nanoid } from 'nanoid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Comments = ({ comments, onClick }) => {
  return (
    <div className={styles.modal}>
      {comments.map((item) => {
        return (
          <div key={nanoid()}>
            <p>{item}</p>
          </div>
        )
      })}
      <FontAwesomeIcon
        icon={faXmark}
        className={styles.cancel}
        onClick={onClick}
      />
    </div>
  )
}
export default Comments
