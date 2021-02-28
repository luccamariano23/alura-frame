class NegociacaoController {

    constructor() {

        //$ para assemelhar a sintaxe JavaScript com JQuery
        let $ = document.querySelector.bind(document);

        //Pega/Busca os elementos da página UMA ÚNICA VEZ
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
    }

    adiciona(event) {

        event.preventDefault();

        //Cria lista de Negociações
        this._listaNegociacoes.adiciona(this._criaNegociacao());
        this._limpaFormulario();
    }

    //_ antes do nome da função significa que a mesma é 'privada'
    _criaNegociacao() {
        return  new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value,
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = 1;
        this._inputValor.value = 0.0;

        this._inputData.focus();
    }
}