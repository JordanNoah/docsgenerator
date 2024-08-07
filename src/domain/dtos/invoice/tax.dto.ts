export class TaxDto {
    constructor(
        public uuid: string,
        public code: number,
        public percentageCode: number,
        public rate: number,
        public taxableBase: number,
        public value: number
    ){}

    static create(object:{[key:string]:any}): [string?, TaxDto?] {
        const {uuid ,code, percentageCode, rate, taxableBase, value} = object
        return [undefined, new TaxDto(uuid, code, percentageCode, rate, taxableBase, value)]
    }

    static save(object:{[key:string]:any}): [string?, TaxDto?] {
        const {uuid, code, percentageCode, rate, taxableBase, value} = object
        if (!code) return ["code is required", undefined]
        //if (!percentageCode) return ["percentageCode is required", undefined]
        if (!rate) return ["rate is required", undefined]
        if (!taxableBase) return ["taxableBase is required", undefined]
        if (!value) return ["value is required", undefined]
        return [undefined, new TaxDto(uuid, code, percentageCode, rate, taxableBase, value)]
    }
}