import styles from './style.module.css'

const ActionButton = ({ title, onClick }) => {
  return (
    <div className={styles.actionButton} onClick={onClick}>
      {title}
    </div>
  )
}
export default ActionButton
