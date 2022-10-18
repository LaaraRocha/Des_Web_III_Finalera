class Negociacao {
    constructor(_data, _quantidade, _valor) {

        Object.assign(this, {_quantidade, _valor});
        this._data = new Date(data.getTime());

        //this._data = data;
        //this._quantidade = quantidade;
        //this._valor = value;
        Object.freeze(this);
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        return new Data(this._data.getTime ());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }
}