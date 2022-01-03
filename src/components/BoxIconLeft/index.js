import styles from './styles.module.scss'

export function BoxIconLeft({icon, title, content, ...rest}){

  return (
    <div className={styles.container} {...rest}>
      <div className={styles.icon}>
        {icon}
      </div>
      <div className={styles.content}>
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </div>
  )
}