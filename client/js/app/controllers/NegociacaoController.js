class NegociacaoController {

    constructor() {

        //$ para assemelhar a sintaxe JavaScript com JQuery
        let $ = document.querySelector.bind(document);

        //Pega/Busca os elementos da página UMA ÚNICA VEZ
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._listaNegociacoes = new ListaNegociacoes();
        this._negociacaoView = new NegociacaoView($('#negociacaoView'));
        //Renderizando tabela na view
        this._negociacaoView.update(this._listaNegociacoes);

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView($('#mensagemView'));
    }

    adiciona(event) {

        event.preventDefault();

        //Cria lista de Negociações
        this._listaNegociacoes.adiciona(this._criaNegociacao());

        //Adicionando negociações na tabela
        this._negociacaoView.update(this._listaNegociacoes);

        //Mensagem de sucesso na Inclusão
        this._mensagem.setTexto('Sucesso na Importação da Negociação!');
        this._mensagemView.update(this._mensagem);

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