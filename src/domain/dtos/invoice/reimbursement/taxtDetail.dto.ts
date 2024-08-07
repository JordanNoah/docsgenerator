export default class TaxDetailDto {
    constructor(
        public uuid: string | null,
        public code: number,
        public percentageCode: number,
        public rate: number,
        public reimbursementTaxableBase: number,
        public reimbursementTax: number
    ) {}

    static create(object:{[key:string]:any}): [string?, TaxDetailDto?] {
        const {uuid, code, percentageCode, rate, reimbursementTaxableBase, reimbursementTax} = object
        return [undefined, new TaxDetailDto(uuid, code, percentageCode, rate, reimbursementTaxableBase, reimbursementTax)]
    }

    static save(object:{[key:string]:any}): [string?, TaxDetailDto?] {
        const {uuid, code, percentageCode, rate, reimbursementTaxableBase, reimbursementTax} = object
        if (!code) return ["code is required", undefined]
        //if (!percentageCode) return ["percentageCode is required", undefined]
        if (!rate) return ["rate is required", undefined]
        if (!reimbursementTaxableBase) return ["reimbursementTaxableBase is required", undefined]
        if (!reimbursementTax) return ["reimbursementTax is required", undefined]
        return [undefined, new TaxDetailDto(uuid, code, percentageCode, rate, reimbursementTaxableBase, reimbursementTax)]
    }
}