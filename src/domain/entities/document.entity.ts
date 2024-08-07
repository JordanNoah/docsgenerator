export default class DocumentEntity {
    constructor(
        public type:string,
        public url:string
    ){}

    static create(object:{[key:string]:any}): DocumentEntity {
        const { type, url } = object;
        return new DocumentEntity(type, url);
    }
}