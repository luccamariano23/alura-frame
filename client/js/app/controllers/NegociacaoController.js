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

        //'Map' captura cada indice de um array. No caso, cada indice do split;
        let data = new Date(
            ...this._inputData.value
            .split('-')
            .map(function (item, index) {
                if(index === 1)
                    return item - 1;
                return item;
            }));


        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value,
        );
        console.log(negociacao);

        //adicionar negociação na lista

    }
}