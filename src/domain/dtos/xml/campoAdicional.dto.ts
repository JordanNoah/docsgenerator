export default class CampoAdicionalDto {
    constructor(
        public campoAdicional:string
    ){}
    static create(object:{[key:string]:any}): [string?, CampoAdicionalDto?] {
        const {
            name,
            value
        } = object
        return [
            undefined, 
            new CampoAdicionalDto(`
                <campoAdicional nombre="${name}">${value}</campoAdicional>    
            `)
        ]
    }
}