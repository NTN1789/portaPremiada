export default class PortaModel {
    #numero:Number
    #temPresente:boolean
    #selecionada:boolean
    #aberta:boolean






constructor(numero:Number, temPresente = false, selecionada = false, aberta = false){
    this.#numero = numero;
    this.#temPresente = temPresente;
    this.#selecionada = selecionada;
    this.#aberta = aberta;  
 

}

get numero(){
    return this.#numero;

}

get temPresente(){
    return this.#temPresente;

}

get selecionada(){
    return this.#selecionada;

}

get aberta(){
    return this.#aberta;

}
get fechada(){
    return !this.#aberta;

}

desselecionar(){        //desselecionar porta
    const desselecionada = false;
    return new PortaModel(this.numero, this.temPresente, desselecionada, this.aberta);
}

alternarSelecao(){
    const selecionada = !this.selecionada; 
    return new PortaModel(this.numero, this.temPresente, selecionada, this.aberta);
}

abrir(){        //porta aberta ou não 
    const aberta = true;
    return new PortaModel(this.numero, this.temPresente, this.selecionada, aberta);
}



}