export default class WithHoldingDto {
    constructor(
        public uuid: string,
        public code: number,
        public percentageCode: number,
        public rate: number,
        public value: number,
    ) {}

    static create(object:{[key:string]:any}): [string?, WithHoldingDto?] {
        const {uuid ,code, percentageCode, rate, value} = object
        return [undefined, new WithHoldingDto(uuid, code, percentageCode, rate, value)]
    }

    static save(object:{[key:string]:any}): [string?, WithHoldingDto?] {
        const {uuid, code, percentageCode, rate, value} = object
        if (!code) return ["code is required", undefined]
        //if (!percentageCode) return ["percentageCode is required", undefined]
        if (!rate) return ["rate is required", undefined]
        if (!value) return ["value is required", undefined]
        return [undefined, new WithHoldingDto(uuid, code, percentageCode, rate, value)]
    }
}