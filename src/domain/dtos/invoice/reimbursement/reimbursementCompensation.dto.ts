export default class ReimbursementCompensationDto {
    constructor(
        public uuid: string | null,
        public code: number,
        public rate: number,
        public value: number
    ){}

    static create(object:{[key:string]:any}): [string?, ReimbursementCompensationDto?] {
        const {uuid,code, rate, value} = object
        return [undefined, new ReimbursementCompensationDto(uuid,code, rate, value)]
    }

    static save(object:{[key:string]:any}): [string?, ReimbursementCompensationDto?] {
        const {uuid,code, rate, value} = object
        if (!code) return ["code is required", undefined]
        if (!rate) return ["rate is required", undefined]
        if (!value) return ["value is required", undefined]
        return [undefined, new ReimbursementCompensationDto(uuid,code, rate, value)]
    }
}