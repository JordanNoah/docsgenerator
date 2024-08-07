import { AdditionalDetailDto } from "./additionalDetail.dto"
import { TaxDto } from "./tax.dto"

export class DetailDto {
    constructor(
        public uuid: string | null,
        public mainCode: string,
        public auxiliaryCode: string,
        public description: string,
        public unitOfMeasure: string,
        public quantity: string,
        public unitPrice: string,
        public priceWithoutSubsidy: string,
        public discount: string,
        public totalPriceWithoutTax: string,
        public additionalDetails: AdditionalDetailDto[],
        public taxes: TaxDto[]
    ) {}

    static create(object:{[key:string]:any}): [string?, DetailDto?] {
        const {uuid ,mainCode, auxiliaryCode, description, unitOfMeasure, quantity, unitPrice, priceWithoutSubsidy, discount, totalPriceWithoutTax, additionalDetails, taxes} = object

        const additionalDetailsDto: AdditionalDetailDto[] = []
        for (const additionalDetail of additionalDetails) {
            const [error, additionalDetailDto] = AdditionalDetailDto.create(additionalDetail)
            if (error) return [error, undefined]
            additionalDetailsDto.push(additionalDetailDto!)
        }

        const taxesDto: TaxDto[] = []
        for (const tax of taxes) {
            const [error, taxDto] = TaxDto.create(tax)
            if (error) return [error, undefined]
            taxesDto.push(taxDto!)
        }

        return [
            undefined,
            new DetailDto(
                uuid,
                mainCode,
                auxiliaryCode,
                description,
                unitOfMeasure,
                quantity,
                unitPrice,
                priceWithoutSubsidy,
                discount,
                totalPriceWithoutTax,
                additionalDetailsDto,
                taxesDto
            )
        ]
    }

    static save(object:{[key:string]:any}): [string?, DetailDto?] {
        const {uuid, mainCode, auxiliaryCode, description, unitOfMeasure, quantity, unitPrice, priceWithoutSubsidy, discount, totalPriceWithoutTax, additionalDetails, taxes} = object

        if (!mainCode) return ["mainCode is required", undefined]
        if (!auxiliaryCode) return ["auxiliaryCode is required", undefined]
        if (!description) return ["description is required", undefined]
        if (!unitOfMeasure) return ["unitOfMeasure is required", undefined]
        if (!quantity) return ["quantity is required", undefined]
        if (!unitPrice) return ["unitPrice is required", undefined]
        if (!priceWithoutSubsidy) return ["priceWithoutSubsidy is required", undefined]
        if (!discount) return ["discount is required", undefined]
        if (!totalPriceWithoutTax) return ["totalPriceWithoutTax is required", undefined]
        if (!additionalDetails) return ["additionalDetails is required", undefined]
        if (!taxes) return ["taxes is required", undefined]

        const additionalDetailsDto: AdditionalDetailDto[] = []
        for (const additionalDetail of additionalDetails) {
            const [error, additionalDetailDto] = AdditionalDetailDto.save(additionalDetail)
            if (error) return [error, undefined]
            additionalDetailsDto.push(additionalDetailDto!)
        }

        const taxesDto: TaxDto[] = []
        for (const tax of taxes) {
            const [error, taxDto] = TaxDto.save(tax)
            if (error) return [error, undefined]
            taxesDto.push(taxDto!)
        }

        return [
            undefined,
            new DetailDto(
                uuid,
                mainCode,
                auxiliaryCode,
                description,
                unitOfMeasure,
                quantity,
                unitPrice,
                priceWithoutSubsidy,
                discount,
                totalPriceWithoutTax,
                additionalDetailsDto,
                taxesDto
            )
        ]
    }
}