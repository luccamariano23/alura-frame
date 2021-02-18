class NegociacaoController {

    constructor() {

        //$ para assemelhar a sintaxe JavaScript com JQuery
        let $ = document.querySelector.bind(document);

        //Pega/Busca os elementos da página UMA ÚNICA VEZ
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');

    }

    adiciona(event) {

        event.preventDefault();

        //Converte String para Date
        let data = new Date(this._inputData.value.split('-'));

        let negociacao = new Negociacao(
            this._inputData.value,
            this._inputQuantidade.value,
            this._inputValor.value,
        );

        //adicionar negociação na lista

    }
}