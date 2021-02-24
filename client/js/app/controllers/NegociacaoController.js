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

        let data = DateHelper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value,
        );

        let diaMesAno = DateHelper.dataParaTexto(negociacao.getData());

        console.log(diaMesAno);
        console.log(negociacao);
        //adicionar negociação na lista

    }
}