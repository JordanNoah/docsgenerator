export default class PagoDto {
    constructor(
        public formaPago: string,
        public total: string,
        public plazo: string,
        public unidadTiempo: string
    ) {}
    static create(object:{[key:string]:any}): [string?, PagoDto?] {
        const {
            paymentMethod,
            total,
            term,
            timeUnit
        } = object
        return [
            undefined,
            new PagoDto(
                paymentMethod,
                total,
                term,
                timeUnit
            )
        ]
    }
}