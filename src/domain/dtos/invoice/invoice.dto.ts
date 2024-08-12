import { AdditionalDetailDto } from "./additionalDetail.dto"
import { DetailDto } from "./detail.dto"
import FinancialInformationDto from "./financialInformation.dto"
import InvoiceAdditionalDetailDto from "./invoiceAdditionalDetail.dto"
import InvoiceInfoDto from "./invoiceInfo.dto"
import ReimbursementDto from "./reimbursement.dto"
import WithHoldingDto from "./withHolding.dto"

export default class InvoiceDto {
    constructor(
        public uuid: string,
        public approvalDate: string,
        public financialInformationDto: FinancialInformationDto,
        public invoiceInfoDto: InvoiceInfoDto,
        public detailsDto: DetailDto[],
        public reimbursementsDto: ReimbursementDto[],
        public withholdingsDto: WithHoldingDto[],
        public invoiceAdditionalDetailsDto: InvoiceAdditionalDetailDto[]
    ) {}

    static create(object:{[key:string]:any}): [string?, InvoiceDto?] {
        const {uuid, approvalDate, financialInformation, invoiceInfo, details, reimbursements, withholdings, additionalDetails} = object

        const [errorFinancialInformationDto, financialInformationDto] = FinancialInformationDto.save(financialInformation)
        if (errorFinancialInformationDto) return [errorFinancialInformationDto, undefined]

        const [errorInvoiceInfo, invoiceInfoDto] = InvoiceInfoDto.save(invoiceInfo)
        if (errorInvoiceInfo) return [errorInvoiceInfo, undefined]

        let detailsDto: DetailDto[] = []

        for (let i = 0; i < details.length; i++) {
            const element = details[i];
            const [errorDetail, detailDto] = DetailDto.save(element)
            if (errorDetail) return [errorDetail, undefined]
            detailsDto.push(detailDto!)
        }       
        
        let reimbursementsDto: ReimbursementDto[] = []

        for (let i = 0; i < reimbursements.length; i++) {
            const element = reimbursements[i];
            const [errorReimbursement, reimbursementDto] = ReimbursementDto.save(element)
            if (errorReimbursement) return [errorReimbursement, undefined]
            reimbursementsDto.push(reimbursementDto!)
        }

        let withholdingsDto: WithHoldingDto[] = []
        for (let i = 0; i < withholdings.length; i++) {
            const element = withholdings[i];
            const [errorWithholding, withholdingDto] = WithHoldingDto.save(element)
            if (errorWithholding) return [errorWithholding, undefined]
            withholdingsDto.push(withholdingDto!)
        }
        
        let additionalDetailsDto: AdditionalDetailDto[] = []
        for (let i = 0; i < additionalDetails.length; i++) {
            const element = additionalDetails[i];
            const [errorAdditionalDetail, additionalDetailDto] = AdditionalDetailDto.save(element)
            if (errorAdditionalDetail) return [errorAdditionalDetail, undefined]
            additionalDetailsDto.push(additionalDetailDto!)
        }
        

        return [
            undefined,
            new InvoiceDto(
                uuid,
                approvalDate,
                financialInformationDto!,
                invoiceInfoDto!,
                detailsDto,
                reimbursementsDto,
                withholdingsDto,
                additionalDetailsDto
            )
        ]
    }

    static save(object:{[key:string]:any}): [string?, InvoiceDto?] {
        const {uuid, approvalDate, financialInformation, invoiceInfo, details, reimbursements, withHoldings, invoiceAdditionalDetails} = object

        const [errorFinancialInformationDto, financialInformationDto] = FinancialInformationDto.save(financialInformation)
        if (errorFinancialInformationDto) return [errorFinancialInformationDto, undefined]

        const [errorInvoiceInfo, invoiceInfoDto] = InvoiceInfoDto.save(invoiceInfo)
        if (errorInvoiceInfo) return [errorInvoiceInfo, undefined]

        let detailsDto: DetailDto[] = []

        for (let i = 0; i < details.length; i++) {
            const element = details[i];
            const [errorDetail, detailDto] = DetailDto.save(element)
            if (errorDetail) return [errorDetail, undefined]
            detailsDto.push(detailDto!)
        }       
        
        let reimbursementsDto: ReimbursementDto[] = []

        for (let i = 0; i < reimbursements.length; i++) {
            const element = reimbursements[i];
            const [errorReimbursement, reimbursementDto] = ReimbursementDto.save(element)
            if (errorReimbursement) return [errorReimbursement, undefined]
            reimbursementsDto.push(reimbursementDto!)
        }

        let withholdingsDto: WithHoldingDto[] = []
        for (let i = 0; i < withHoldings.length; i++) {
            const element = withHoldings[i];
            const [errorWithholding, withholdingDto] = WithHoldingDto.save(element)
            if (errorWithholding) return [errorWithholding, undefined]
            withholdingsDto.push(withholdingDto!)
        }
        
        let additionalDetailsDto: AdditionalDetailDto[] = []
        for (let i = 0; i < invoiceAdditionalDetails.length; i++) {
            const element = invoiceAdditionalDetails[i];
            const [errorAdditionalDetail, additionalDetailDto] = AdditionalDetailDto.save(element)
            if (errorAdditionalDetail) return [errorAdditionalDetail, undefined]
            additionalDetailsDto.push(additionalDetailDto!)
        }
        
        return [
            undefined,
            new InvoiceDto(
                uuid,
                approvalDate,
                financialInformationDto!,
                invoiceInfoDto!,
                detailsDto,
                reimbursementsDto,
                withholdingsDto,
                additionalDetailsDto
            )
        ]
    }
}