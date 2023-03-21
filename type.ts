class Default {
    texto: string;
    numero: number;
    qlqr: any;
    boleano: boolean;
    array: Array<any>;

    constructor(){
        this.metodo();
        this.array = [
            {
                teste : "Test"
            }
        ];
    }
    metodo(){
        this.numero = 10;
        this.texto = `Este é um alert simples em typeScript${this.numero}`
        return alert(this.texto)
    }
}