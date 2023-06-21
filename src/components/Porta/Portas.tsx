import PortaModel from "@/models/PortaModel"
import styles from "./Portas.module.scss"
import Presente from "../Presente/Presente"
type PortaProps = {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void      //function significa que vai conseguir colocar onchange é uma nova porta


}

export default function Portas(props: PortaProps) {
  const porta = props.value;
  // se a porta for aberta ela vai ser desselecionada
  const selecionada = porta.selecionada &&  !porta.aberta ? styles.selecionada : "";

  // essa arrow  vai receber um event = E , e vai chamar a props com  uma seleção alternada
  // essa seleção alternada já ta feito pelo o models

  const AlternarSelecaoDePorta = e => props.onChange(porta.alternarSelecao())
  // vai alternar o valor sem mexer na propriedade original dela é criar uma nova porta
  
  const abrir = e =>  {
  e.stopPropagation()  
    props.onChange(porta.abrir())
  // abrir porta
  // selecionar a porta é se abrir ela ,vai embora
  }
  
  function RenderizacaoDePorta() {
    return (

      <div className={styles.porta}>
          <div className={styles.number}>{porta.numero}</div>
          <div className={styles.macaneta} onClick={abrir}></div>
        </div>

)
}

return (
  <div className={styles.area} onClick={AlternarSelecaoDePorta}>
<div className={`${styles.frame} ${selecionada}`}>
      {
        // a porta está aberta ou não . se tiver a aberta não vai renderizar , caso estiver aberta vai renderizar a div
       porta.fechada ?
       RenderizacaoDePorta() : porta.temPresente ? 
          <Presente/> : false
       
       }
        </div>
    </div>
  )
}
