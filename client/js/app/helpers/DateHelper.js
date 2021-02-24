class DateHelper {

    static textoParaData(texto) {

        //'Map' captura cada indice de um array. No caso, cada indice do split;
        return new Date(
                texto
                .split('-')
                .map(function (item, index) {
                    return item;
                }));
    }

    static dataParaTexto(data) {

        return data.getDate()
        + '/' + (data.getMonth() + 1)
        + '/' + data.getFullYear();
    }
}