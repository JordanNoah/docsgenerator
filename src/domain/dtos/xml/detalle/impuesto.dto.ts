export default class ImpuestoDto {
    constructor(
        public codigo:string,
        public codigoPorcentaje:string,
        public tarifa:string,
        public baseImponible:string,
        public valor:string
    ){}
    static create(object:{[key:string]:any}): [string?, ImpuestoDto?] {
        const {
            code,
            percentageCode,
            rate,
            taxableBase,
            value
        } = object
        return [
            undefined,
            new ImpuestoDto(
                code, 
                percentageCode, 
                rate, 
                taxableBase, 
                value
            )
        ]
    }
}