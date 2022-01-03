import styles from './styles.module.scss'

export function BoxNumber({topBox, title, content, ...rest}){

  return (
    <div className={styles.container} {...rest} >
      <p>{topBox}</p>
      <h4>{title}</h4>
      <p>{content}</p>
    </div>
  )
}