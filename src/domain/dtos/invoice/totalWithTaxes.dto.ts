export default class TotalWithTaxesDto {
    constructor(
        public uuid: string | null,
        public code: number | null,
        public percentageCode: number | null,
        public additionalDiscount: number | null,
        public taxableBase: number | null,
        public rate: number | null,
        public value: number | null,
        public taxRefundValue: number | null
    ){}

    static create(object:{[key:string]:any}): [string?, TotalWithTaxesDto?] {
        const {uuid, code, percentageCode, additionalDiscount, taxableBase, rate, value, taxRefundValue} = object

        return [
            undefined,
            new TotalWithTaxesDto(
                uuid,
                code,
                percentageCode,
                additionalDiscount,
                taxableBase,
                rate,
                value,
                taxRefundValue
            )
        ]
    }

    static save(object:{[key:string]:any}): [string?, TotalWithTaxesDto?] {
        const {uuid, code, percentageCode, additionalDiscount, taxableBase, rate, value, taxRefundValue} = object

        if(!code) return ["Code is required", undefined]
        //if(!percentageCode) return ["Percentage code is required", undefined]
        if(!additionalDiscount) return ["Additional discount is required", undefined]
        if(!taxableBase) return ["Taxable base is required", undefined]
        if(!rate) return ["Rate is required", undefined]
        if(!value) return ["Value is required", undefined]
        if(!taxRefundValue) return ["Tax refund value is required", undefined]

        return [
            undefined,
            new TotalWithTaxesDto(
                uuid,
                code,
                percentageCode,
                additionalDiscount,
                taxableBase,
                rate,
                value,
                taxRefundValue
            )
        ]
    }
}