var Default = /** @class */ (function () {
    function Default() {
        this.metodo();
        this.array = [
            {
                teste: "Test"
            }
        ];
    }
    Default.prototype.metodo = function () {
        this.numero = 10;
        this.texto = "Este \u00E9 um alert simples em typeScript".concat(this.numero);
        return alert(this.texto);
    };
    return Default;
}());
