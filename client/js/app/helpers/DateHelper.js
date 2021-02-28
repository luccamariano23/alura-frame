class DateHelper {

    static textoParaData(texto) {

        //Regex para validar se o texto segue a estrutura correta
        if(!/\d{4}-\d{2}-\d{2}/.test(texto))
            throw new Error('Formato data inválido. A data deve estar no formato yyyy-aa-dd');

        //'Map' captura cada indice de um array. No caso, cada indice do split;
        return new Date(
                texto
                .split('-')
                .map(function (item, index) {
                    return item;
                }));
    }

    static dataParaTexto(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}