import styles from "./Portas.module.scss"
type PortaProps = {

}

export default function Portas({}: PortaProps ) {
  return (
    <div className={styles.area}>
       <div className={styles.frame}>
    <div className={styles.porta}>
     <div className={styles.number}>1</div>
     </div>
        </div>
        </div>
  )
}
