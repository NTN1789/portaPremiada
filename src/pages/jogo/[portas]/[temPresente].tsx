import Portas from '@/components/Porta/Portas'
import { atualizarPortas, criarPortas } from '@/functions/quantidadePortas'
import { useEffect, useState } from 'react'
import styles from "../../../styles/jogo.module.scss"
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Jogo() {
  
  const router = useRouter()
  const [valido,setValido] = useState(false);
    const [portas,setPort] = useState([]);

useEffect(() => {
    const portas = +router.query.portas     // o + é para convertar para number
    const temPrese =  +router.query.temPresente
   


    const quantidadePortasValida =  portas >= 3 && portas <= 100 // limitando as portas até 100
    const temPresenteValido = temPrese >= 1 && temPrese <= portas // limitando o temPresente até a quantidade de portas

    setValido(quantidadePortasValida && temPresenteValido)
}, [portas]) // sempre que modificar portas vai chamar o valido



useEffect(() => {
    const portas = +router.query.portas     // o + é para convertar para number
    const temPrese =  +router.query.temPresente
    setPort(criarPortas(portas,temPrese))

}, [router?.query])

    function renderizarPorta() {
        return valido && portas.map(porta => {
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
    { valido ?
        renderizarPorta()
        :
        <h2>valores invalido</h2>
    }
        
     

    </div>
    <div className={styles.botoes}>
        <Link href="/">
            <button>Reiniciar o jogo</button>
        </Link>
    </div>
    
    
        </div>
    )
}
