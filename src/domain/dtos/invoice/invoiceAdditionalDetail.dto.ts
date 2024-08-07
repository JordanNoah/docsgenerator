export default class InvoiceAdditionalDetailDto{
    constructor(
        public uuid: string | null,
        public name: string,
        public value: string
    ){}

    static create(object:{[key:string]:any}): [string?, InvoiceAdditionalDetailDto?] {
        const {uuid ,name, value } = object
        if(!name) return ['name is required', undefined]
        if(!value) return ['value is required', undefined]
        return [undefined, new InvoiceAdditionalDetailDto(uuid, name, value)]
    }
}