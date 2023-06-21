import styles from "../../styles/Card.module.scss"

interface Cards {
    bgColor?:string
    children?:any
    color?:string
}



export default function Card(props:Cards) {
  return (
    <div className={styles.card}
      style={{ 
        backgroundColor: props.color ?? "#fff"

      }} >
        {props.children}
        </div>
  )
}