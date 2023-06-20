import PortaModel from "@/models/PortaModel";
// array.from pode receber um objeto é dentro das propriedade dela , pode colocar length é o tamanho dela 
// Array.from({length:10}) tem com passar outra coisa dentro 

// Array.from({length:10},(,i) => i + 1  ) => vai contar até 10 


export function criarPortas(qtde:number,selecionada:number):PortaModel[] {
 
    return Array.from({length:qtde}, (_,i) => {

    const numero = i + 1 
    // tem ou não tem presente , se o numero for igual a porta selecionada, vai ter presente 
  const temPresente = numero === selecionada

    return new PortaModel(numero,temPresente)

 })
 
 
}

// function para atualizar as portas
    // essa funcao vai retornar um novo array com os dados atualizados
    // vai passar o array original de portas vai receber o modificado 
    //  é vai gerar um novo array  levando para o arrray original 
    
export function atualizarPortas(portas:PortaModel[], portaModificada:PortaModel):PortaModel[] {
        return portas.map(portaAtual  => {
            const igualAModidificada = portaAtual.numero ===  portaModificada.numero

            if(igualAModidificada){
                return portaModificada 
            }   else{
               return  portaModificada.aberta ? portaAtual: portaAtual.desselecionar()
               // logica para não desselecionar a porta selecionada

            }
        })
}