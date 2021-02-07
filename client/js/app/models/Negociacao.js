class Negociacao {

    constructor(data, quantidade, valor) {

        //O underline(_) torna a variável 'privada'
        this._data = new Date(data.getTime());
        this._quantidade = quantidade;
        this._valor = valor;

        //Freeze não deixa alterar os valores de um objeto uma vez setados
        Object.freeze(this);
    }

    getVolume() {
        return this._quantidade * this._valor;
    }

    getData () {
        return new Date(this._data.getTime());
    }

    getQuantidade() {
        return this._quantidade;
    }

    getValor() {
        return this._valor;
    }
}