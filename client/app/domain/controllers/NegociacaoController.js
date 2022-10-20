class NegociacaoController {

    Constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputvalor = $("#valor");
        this._negociacoes = new Negociacoes();
    }

    adiciona(event) {
        event.preventDefault();

        const data = DateConverter.paraData(this._inputData.value);
        console.log(data);
        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputvalor.value)
        );

        let diaMesAno = DateConverter.paraTexto(data);
        console.log(diaMesAno)
    }
}