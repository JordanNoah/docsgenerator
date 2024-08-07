export class AdditionalDetailDto {
    constructor(
        public name: string,
        public value: string,
        public uuid: string | null,
    ){}

    static create(object:{[key:string]:any}): [string?, AdditionalDetailDto?] {
        const {name, value, uuid} = object
        return [undefined, new AdditionalDetailDto(name, value, uuid)]
    }

    static save(object:{[key:string]:any}): [string?, AdditionalDetailDto?] {
        const {name, value, uuid} = object
        if (!name) return ["name is required", undefined]
        if (!value) return ["value is required", undefined]
        return [undefined, new AdditionalDetailDto(name, value, uuid)]
    }
}