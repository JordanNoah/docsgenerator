import CompensationDto from "./compesation.dto"
import ReimbursementCompensationDto from "./reimbursement/reimbursementCompensation.dto";
import TaxDetailDto from "./reimbursement/taxtDetail.dto"

export default class ReimbursementDto {
    constructor(
        public uuid: string | null,
        public reimbursementProviderIdentificationType: number,
        public reimbursementProviderIdentification: string,
        public reimbursementProviderCountryCode: number,
        public reimbursementProviderType: number,
        public reimbursementDocCode: number,
        public reimbursementDocEstablishment: number,
        public reimbursementDocEmissionPoint: number,
        public reimbursementDocSequential: number,
        public reimbursementDocIssueDate: Date,
        public reimbursementDocAuthorizationNumber: number,
        public taxDetails: TaxDetailDto[],
        public reimbursementCompensations: ReimbursementCompensationDto[]        
    ) {}

    static create(object:{[key:string]:any}): [string?, ReimbursementDto?] {
        const {
            uuid,
            reimbursementProviderIdentificationType,
            reimbursementProviderIdentification,
            reimbursementProviderCountryCode,
            reimbursementProviderType,
            reimbursementDocCode,
            reimbursementDocEstablishment,
            reimbursementDocEmissionPoint,
            reimbursementDocSequential,
            reimbursementDocIssueDate,
            reimbursementDocAuthorizationNumber,
            taxDetails,
            reimbursementCompensations
        } = object

        let taxDetailsDto: TaxDetailDto[] = []
        for (let i = 0; i < taxDetails.length; i++) {
            const element = taxDetails[i];
            const [errorTaxDetail, taxDetailDto] = TaxDetailDto.create(element)
            if (errorTaxDetail) return [errorTaxDetail, undefined]
            taxDetailsDto.push(taxDetailDto!)
        }

        let reimbursementCompensationsDto: ReimbursementCompensationDto[] = []
        for (let i = 0; i < reimbursementCompensations.length; i++) {
            const element = reimbursementCompensations[i];
            const [errorCompensation, reimbursementCompensationDto] = ReimbursementCompensationDto.create(element)
            if (errorCompensation) return [errorCompensation, undefined]
            reimbursementCompensationsDto.push(reimbursementCompensationDto!)
        }

        return [
            undefined,
            new ReimbursementDto(
                uuid,
                reimbursementProviderIdentificationType,
                reimbursementProviderIdentification,
                reimbursementProviderCountryCode,
                reimbursementProviderType,
                reimbursementDocCode,
                reimbursementDocEstablishment,
                reimbursementDocEmissionPoint,
                reimbursementDocSequential,
                reimbursementDocIssueDate,
                reimbursementDocAuthorizationNumber,
                taxDetailsDto,
                reimbursementCompensationsDto
            )
        ]
    }
    static save(object:{[key:string]:any}): [string?, ReimbursementDto?] {
        const {
            uuid,
            reimbursementProviderIdentificationType,
            reimbursementProviderIdentification,
            reimbursementProviderCountryCode,
            reimbursementProviderType,
            reimbursementDocCode,
            reimbursementDocEstablishment,
            reimbursementDocEmissionPoint,
            reimbursementDocSequential,
            reimbursementDocIssueDate,
            reimbursementDocAuthorizationNumber,
            taxDetails,
            reimbursementCompensations
        } = object

        if (!reimbursementProviderIdentificationType) return ["reimbursementProviderIdentificationType is required", undefined]
        if (!reimbursementProviderIdentification) return ["reimbursementProviderIdentification is required", undefined]
        //if (!reimbursementProviderCountryCode) return ["reimbursementProviderCountryCode is required", undefined]
        if (!reimbursementProviderType) return ["reimbursementProviderType is required", undefined]
        //if (!reimbursementDocCode) return ["reimbursementDocCode is required", undefined]
        //if (!reimbursementDocEstablishment) return ["reimbursementDocEstablishment is required", undefined]
        //if (!reimbursementDocEmissionPoint) return ["reimbursementDocEmissionPoint is required", undefined]
        //if (!reimbursementDocSequential) return ["reimbursementDocSequential is required", undefined]
        //if (!reimbursementDocIssueDate) return ["reimbursementDocIssueDate is required", undefined]
        //if (!reimbursementDocAuthorizationNumber) return ["reimbursementDocAuthorizationNumber is required", undefined]
        //if (!taxDetails) return ["taxDetails is required", undefined]
        if (!reimbursementCompensations) return ["reimbursementCompensations is required", undefined]

        let taxDetailsDto: TaxDetailDto[] = []
        for (let i = 0; i < taxDetails.length; i++) {
            const element = taxDetails[i];
            const [errorTaxDetail, taxDetailDto] = TaxDetailDto.save(element)
            if (errorTaxDetail) return [errorTaxDetail, undefined]
            taxDetailsDto.push(taxDetailDto!)
        }        

        let reimbursementCompensationsDto: ReimbursementCompensationDto[] = []
        for (let i = 0; i < reimbursementCompensations.length; i++) {
            const element = reimbursementCompensations[i];
            const [errorCompensation, reimbursementCompensationDto] = ReimbursementCompensationDto.save(element)
            if (errorCompensation) return [errorCompensation, undefined]
            reimbursementCompensationsDto.push(reimbursementCompensationDto!)
        }

        return [
            undefined,
            new ReimbursementDto(
                uuid,
                reimbursementProviderIdentificationType,
                reimbursementProviderIdentification,
                reimbursementProviderCountryCode,
                reimbursementProviderType,
                reimbursementDocCode,
                reimbursementDocEstablishment,
                reimbursementDocEmissionPoint,
                reimbursementDocSequential,
                reimbursementDocIssueDate,
                reimbursementDocAuthorizationNumber,
                taxDetailsDto,
                reimbursementCompensationsDto
            )
        ]
    }
}