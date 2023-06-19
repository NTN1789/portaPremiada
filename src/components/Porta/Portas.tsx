import PortaModel from "@/models/PortaModel"
import styles from "./Portas.module.scss"
type PortaProps = {
  porta:PortaModel

}

export default function Portas(props: PortaProps ) {
  const {porta} = props
  const portaSelecionada = porta.selecionada ? styles.selecionada : ""
 
  return (
    <div className={styles.area}>
<div className={`${styles.frame} ${portaSelecionada}`}>
    <div className={styles.porta}>
     <div className={styles.number}>{porta.numero}</div>
     <div className={styles.macaneta}></div>
     </div>
        </div>
        </div>
  )
}
