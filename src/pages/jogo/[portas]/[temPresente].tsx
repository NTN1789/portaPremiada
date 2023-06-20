import Portas from '@/components/Porta/Portas'
import { atualizarPortas, criarPortas } from '@/functions/quantidadePortas'
import { useEffect, useState } from 'react'
import styles from "../../../styles/jogo.module.scss"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function jogo() {
  
  const router = useRouter()
  
    const [portas,setPort] = useState([])

useEffect(() => {
    const portas = +router.query.portas     // o + é para convertar para number
    const temPrese =  +router.query.temPresente
    setPort(criarPortas(portas,temPrese))

}, [router])

    function renderizarPorta() {
        return portas.map(porta => {
            return (
                <>
                    <Portas key={porta.numero}
                        value={porta}
                        onChange={novaPorta => setPort(atualizarPortas(portas, novaPorta))

                            // ta gerando um novo array tem que usar o setPort
                        }
                    />
                </>
            )
        })

    }
    return (
        <div id={styles.jogo} >
    <div className={styles.portas}>

    {renderizarPorta()}
    </div>
    <div className={styles.botoes}>
        <Link href="/">
            <button>Reiniciar o jogo</button>
        </Link>
    </div>
    
    
        </div>
    )
}
