class Mensagem {

    constructor(texto = '') {
        this._texto = '';
    }

    getTexto() {
        return this._texto;
    }

    setTexto(texto){
        this._texto = texto;
    }
}