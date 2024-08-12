export default class DetalleAdicionalDto {
    constructor(
        public nombre:string,
        public valor:string
    ){}
    static create(object:{[key:string]:any}): [string?, DetalleAdicionalDto?] {
        const {
            name,
            value
        } = object
        return [undefined, new DetalleAdicionalDto(name, value)]
    }
}