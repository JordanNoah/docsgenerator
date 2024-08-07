export default class FinancialInformationDto {
    constructor(
        public environment: number,
        public issueType: number,
        public businessName: string,
        public tradeName: string,
        public taxId: string,
        public accessKey: string,
        public docCode: string,
        public establishment: string,
        public emissionPoint: string,
        public sequential: string,
        public headquartersAddress: string,
        public withholdingAgent: string,
        public rimpeTaxpayer: string
    ) {}

    static create(object:{[key:string]:any}): [string?, FinancialInformationDto?] {
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
            headquartersAddress,
            withholdingAgent,
            rimpeTaxpayer
        } = object

        return [
            undefined,
            new FinancialInformationDto(
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
                headquartersAddress,
                withholdingAgent,
                rimpeTaxpayer
            )
        ]
    }

    static save(object:{[key:string]:any}): [string?, FinancialInformationDto?] {
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
            headquartersAddress,
            withholdingAgent,
            rimpeTaxpayer
        } = object        

        if (!environment) return ['Environment is required', undefined]
        if (!issueType) return ['Issue type is required', undefined]
        if (!businessName) return ['Business name is required', undefined]
        if (!tradeName) return ['Trade name is required', undefined]
        if (!taxId) return ['Tax ID is required', undefined]
        if (!accessKey) return ['Access key is required', undefined]
        if (!docCode) return ['Document code is required', undefined]
        if (!establishment) return ['Establishment is required', undefined]
        if (!emissionPoint) return ['Emission point is required', undefined]
        if (!sequential) return ['Sequential is required', undefined]
        if (!headquartersAddress) return ['Headquarters address is required', undefined]
        if (!withholdingAgent) return ['Withholding agent is required', undefined]
        if (!rimpeTaxpayer) return ['Rimpe taxpayer is required', undefined]

        return [
            undefined, new FinancialInformationDto(
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
                headquartersAddress,
                withholdingAgent,
                rimpeTaxpayer
            )
        ]
    }
}