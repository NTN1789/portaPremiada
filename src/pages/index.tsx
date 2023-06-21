import Card from '@/components/card/Card'
import styles from "../styles/Formulario.module.scss"
import Link from 'next/link'
import EntradaNumerica from '@/components/input/EntradaNumerica'
import { useState } from 'react'


export default function Form() {
const [qtdePortas, setQtdePortas] = useState<Number | null>(3);
const [comPresente, setComPresente] = useState<Number | null>(1);


  return (
    <div className={styles.form} >
      <div >
        <Card bgcolor="#c0392c">
          <h1>Monty hall</h1>
        </Card>
        <Card >
            <EntradaNumerica text='qtde portas ?'
             value={qtdePortas} 
             onChange={novaqtde => setQtdePortas(novaqtde)}/>
        </Card>
      </div>
      <div >
        <Card >
        <EntradaNumerica text='porta com presente ?'
             value={comPresente} 
             onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>

        </Card>

        <Card bgcolor="green">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} >
            <h2 className={styles.link} >Iniciar</h2>
          </Link>
        </Card>
      </div>


    </div>
  )
}
