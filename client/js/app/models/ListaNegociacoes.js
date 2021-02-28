class ListaNegociacoes {

    constructor() {

        this._negociacoes = [];
    }

    adiciona(negociacao) {

        this._negociacoes.push(negociacao);
    }

    getNegociacoes() {

        //Programação defensiva, onde o getter nao retorna a lista 'original', mas sim uma cópia da mesma
        return [].concat(this._negociacoes);
    }

}