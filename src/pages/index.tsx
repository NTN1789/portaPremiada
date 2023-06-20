
import Portas from '@/components/Porta/Portas'
import { atualizarPortas, criarPortas } from '@/functions/quantidadePortas'
import PortaModel from '@/models/PortaModel'
import { useState } from 'react'


export default function Home() {


  // padronizar a porta para ter os mesmos atributo que o input

   const [portas,setPort] = useState(criarPortas(4,2))

   function renderizarPorta (){
      return portas.map(porta  => {
        return(
          <>
          <Portas       key={porta.numero}
 value={porta} 
onChange={novaPorta => setPort(atualizarPortas(portas,novaPorta))

  // ta gerando um novo array tem que usar o setPort
}

 />

          </>
        )
      })

   }

  return (
    <div 
    style={{display:"flex"    }} >

{renderizarPorta()}


    </div>
  )
}
