
import Portas from '@/components/Porta/Portas'
import PortaModel from '@/models/PortaModel'
import { useState } from 'react'


export default function Home() {
  //estado interno no componente
  const[ p1 , setP1] = useState(new PortaModel(1))
  

  return (
    <div style={{display:"flex" , justifyContent:"center",}} >
<Portas  porta={p1} />




    </div>
  )
}
