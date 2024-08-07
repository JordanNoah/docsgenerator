export default class PaymentDto {
    constructor(
        public uuid: string | null,
        public paymentMethod: number | null,
        public total: number | null,
        public term: number | null,
        public timeUnit: string | null
    ){}

    static create(object:{[key:string]:any}): [string?, PaymentDto?] {
        const {uuid, paymentMethod, total, term, timeUnit} = object

        return [
            undefined,
            new PaymentDto(
                uuid,
                paymentMethod,
                total,
                term,
                timeUnit
            )
        ]
    }

    static save(object:{[key:string]:any}): [string?, PaymentDto?] {
        const {uuid ,paymentMethod, total, term, timeUnit} = object

        if(!paymentMethod) return ["Payment method is required", undefined]
        if(!total) return ["Total is required", undefined]
        if(!term) return ["Term is required", undefined]
        if(!timeUnit) return ["Time unit is required", undefined]

        return [
            undefined,
            new PaymentDto(
                uuid,
                paymentMethod,
                total,
                term,
                timeUnit
            )
        ]
    }
}