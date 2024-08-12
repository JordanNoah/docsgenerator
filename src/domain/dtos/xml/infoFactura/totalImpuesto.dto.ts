export default class TotalImpuestoDto {
    constructor(
        public codigo:string,
        public codigoPorcentaje:string,
        public descuentoAdicional:string,
        public baseImponible:string,
        public tarifa:string,
        public valor:string
    ){}
    static create(object:{[key:string]:any}): [string?, TotalImpuestoDto?] {
        const {
            code,
            percentageCode,
            additionalDiscount,
            taxableBase,
            rate,
            value
        } = object
        return [
            undefined, 
            new TotalImpuestoDto(
                code,
                percentageCode,
                additionalDiscount,
                taxableBase,
                rate,
                value
            )]
    }
}