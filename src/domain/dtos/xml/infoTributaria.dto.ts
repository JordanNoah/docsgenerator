export default class InfoTributariaDto {
    constructor(
        public ambiente: string,
        public tipoEmision: string,
        public razonSocial: string,
        public nombreComercial: string,
        public ruc: string,
        public claveAcceso: string,
        public codDoc: string,
        public estab: string,
        public ptoEmi: string,
        public secuencial: string,
        public dirMatriz: string
    ) {}
    static create(object:{[key:string]:any}): [string?, InfoTributariaDto?] {
        const {
            environment,
            issueType,
            businessName,
            tradeName,
            taxId,
            accessKey,
            docCode,
            establishment,
            emissionPoint,
            sequential,
            headquartersAddress
        } = object
        return [
            undefined,
            new InfoTributariaDto(
                environment,
                issueType,
                businessName,
                tradeName,
                taxId,
                accessKey,
                docCode,
                establishment,
                emissionPoint,
                sequential,
                headquartersAddress
            )
        ]
    }
}