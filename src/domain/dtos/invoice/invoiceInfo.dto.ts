import CompensationDto from "./compesation.dto";
import PaymentDto from "./payment.dto";
import TotalWithTaxesDto from "./totalWithTaxes.dto";

export default class InvoiceInfoDto {
    constructor(
        public issueDate: Date | null,
        public establishmentAddress: string | null,
        public specialTaxpayer: string | null,
        public accountingObligation: string | null,
        public foreignTrade: string | null,
        public incoTermInvoice: string | null,
        public incoTermLocation: string | null,
        public countryOfOrigin: string | null,
        public portOfShipment: string | null,
        public portOfDestination: string | null,
        public destinationCountry: string | null,
        public acquisitionCountry: string | null,
        public buyerIdentificationType: string | null,
        public deliveryNote: string | null,
        public buyerBusinessName: string | null,
        public buyerIdentification: string | null,
        public buyerAddress: string | null,
        public totalWithoutTaxes: number | null,
        public totalSubsidy: number | null,
        public incoTermTotalWithoutTaxes: string | null,
        public totalDiscount: number | null,
        public reimbursementDocCode: number | null,
        public totalReimbursementInvoices: number | null,
        public totalReimbursementTaxableBase: number | null,
        public totalReimbursementTax: number | null,
        public totalWithTaxes: TotalWithTaxesDto[],
        public compensations: CompensationDto[],
        public tip: number | null,
        public internationalFreight: number | null,
        public internationalInsurance: number | null,
        public customsExpenses: number | null,
        public otherTransportExpenses: number | null,
        public totalAmount: number | null,
        public currency: string | null,
        public plate: string | null,
        public vatWithheldValue: number | null,
        public incomeTaxWithheldValue: number | null,
        public payments: PaymentDto[],
        public totalTaxesCodeCero: string,
        public totalTaxesCodeTwo: string,
        public totalTaxesCodeThree: string,
        public totalTaxesCodeFour: string,
        public totalTaxesCodeFive: string,
        public totalTaxesCodeSix: string,
        public totalTaxesCodeSeven: string,
        public totalTaxesCodeEight: string,
        public totalTaxesCodeTen: string,
        public totalIce: string,
        public totalIrbpnr: string,
    ){}
    static create(object:{[key:string]:any}): [string?, InvoiceInfoDto?] {
        const {
            issueDate,
            establishmentAddress,
            specialTaxpayer,
            accountingObligation,
            foreignTrade,
            incoTermInvoice,
            incoTermLocation,
            countryOfOrigin,
            portOfShipment,
            portOfDestination,
            destinationCountry,
            acquisitionCountry,
            buyerIdentificationType,
            deliveryNote,
            buyerBusinessName,
            buyerIdentification,
            buyerAddress,
            totalWithoutTaxes,
            totalSubsidy,
            incoTermTotalWithoutTaxes,
            totalDiscount,
            reimbursementDocCode,
            totalReimbursementInvoices,
            totalReimbursementTaxableBase,
            totalReimbursementTax,
            totalWithTaxes,
            compensations,
            tip,
            internationalFreight,
            internationalInsurance,
            customsExpenses,
            otherTransportExpenses,
            totalAmount,
            currency,
            plate,
            vatWithheldValue,
            incomeTaxWithheldValue,
            payments,
            totalTaxesCodeCero,
            totalTaxesCodeTwo,
            totalTaxesCodeThree,
            totalTaxesCodeFour,
            totalTaxesCodeFive,
            totalTaxesCodeSix,
            totalTaxesCodeSeven,
            totalTaxesCodeEight,
            totalTaxesCodeTen,
            totalIce,
            totalIrbpnr,
        } = object
        return [
            undefined, 
            new InvoiceInfoDto(
                issueDate,
                establishmentAddress,
                specialTaxpayer,
                accountingObligation,
                foreignTrade,
                incoTermInvoice,
                incoTermLocation,
                countryOfOrigin,
                portOfShipment,
                portOfDestination,
                destinationCountry,
                acquisitionCountry,
                buyerIdentificationType,
                deliveryNote,
                buyerBusinessName,
                buyerIdentification,
                buyerAddress,
                totalWithoutTaxes,
                totalSubsidy,
                incoTermTotalWithoutTaxes,
                totalDiscount,
                reimbursementDocCode,
                totalReimbursementInvoices,
                totalReimbursementTaxableBase,
                totalReimbursementTax,
                totalWithTaxes.map((totalWithTaxes: any) => TotalWithTaxesDto.create(totalWithTaxes)[1]!),
                compensations.map((compensations: any) => CompensationDto.create(compensations)[1]!),
                tip,
                internationalFreight,
                internationalInsurance,
                customsExpenses,
                otherTransportExpenses,
                totalAmount,
                currency,
                plate,
                vatWithheldValue,
                incomeTaxWithheldValue,
                payments.map((payment: any) => PaymentDto.create(payment)[1]!),
                totalTaxesCodeCero,
                totalTaxesCodeTwo,
                totalTaxesCodeThree,
                totalTaxesCodeFour,
                totalTaxesCodeFive,
                totalTaxesCodeSix,
                totalTaxesCodeSeven,
                totalTaxesCodeEight,
                totalTaxesCodeTen,
                totalIce,
                totalIrbpnr
            )
        ]
    }
    static save(object:{[key:string]:any}): [string?, InvoiceInfoDto?] {
        const {
            issueDate,
            establishmentAddress,
            specialTaxpayer,
            accountingObligation,
            foreignTrade,
            incoTermInvoice,
            incoTermLocation,
            countryOfOrigin,
            portOfShipment,
            portOfDestination,
            destinationCountry,
            acquisitionCountry,
            buyerIdentificationType,
            deliveryNote,
            buyerBusinessName,
            buyerIdentification,
            buyerAddress,
            totalWithoutTaxes,
            totalSubsidy,
            incoTermTotalWithoutTaxes,
            totalDiscount,
            reimbursementDocCode,
            totalReimbursementInvoices,
            totalReimbursementTaxableBase,
            totalReimbursementTax,
            totalWithTaxes,
            compensations,
            tip,
            internationalFreight,
            internationalInsurance,
            customsExpenses,
            otherTransportExpenses,
            totalAmount,
            currency,
            plate,
            vatWithheldValue,
            incomeTaxWithheldValue,
            payments,
            totalTaxesCodeCero,
            totalTaxesCodeTwo,
            totalTaxesCodeThree,
            totalTaxesCodeFour,
            totalTaxesCodeFive,
            totalTaxesCodeSix,
            totalTaxesCodeSeven,
            totalTaxesCodeEight,
            totalTaxesCodeTen,
            totalIce,
            totalIrbpnr
        } = object
        
        if(!issueDate) return ['issueDate is required',undefined]
        if(!establishmentAddress) return ['establishmentAddress is required',undefined]
        if(!specialTaxpayer) return ['specialTaxpayer is required',undefined]
        if(!accountingObligation) return ['accountingObligation is required',undefined]
        if(!foreignTrade) return ['foreignTrade is required',undefined]
        if(!incoTermInvoice) return ['incoTermInvoice is required',undefined]
        if(!incoTermLocation) return ['incoTermLocation is required',undefined]
        if(!countryOfOrigin) return ['countryOfOrigin is required',undefined]
        if(!portOfShipment) return ['portOfShipment is required',undefined]
        if(!portOfDestination) return ['portOfDestination is required',undefined]
        if(!destinationCountry) return ['destinationCountry is required',undefined]
        if(!acquisitionCountry) return ['acquisitionCountry is required',undefined]
        if(!buyerIdentificationType) return ['buyerIdentificationType is required',undefined]
        if(!deliveryNote) return ['deliveryNote is required',undefined]
        if(!buyerBusinessName) return ['buyerBusinessName is required',undefined]
        if(!buyerIdentification) return ['buyerIdentification is required',undefined]
        if(!buyerAddress) return ['buyerAddress is required',undefined]
        if(!totalWithoutTaxes) return ['totalWithoutTaxes is required',undefined]
        if(!totalSubsidy) return ['totalSubsidy is required',undefined]
        if(!incoTermTotalWithoutTaxes) return ['incoTermTotalWithoutTaxes is required',undefined]
        if(!totalDiscount) return ['totalDiscount is required',undefined]
        if(!totalReimbursementInvoices) return ['totalReimbursementInvoices is required',undefined]
        if(!totalReimbursementTaxableBase) return ['totalReimbursementTaxableBase is required',undefined]
        if(!totalReimbursementTax) return ['totalReimbursementTax is required',undefined]
        if(!totalWithTaxes) return ['totalWithTaxes is required',undefined]
        if(!compensations) return ['compensations is required',undefined]
        if(!tip) return ['tip is required',undefined]
        if(!internationalFreight) return ['internationalFreight is required',undefined]
        if(!internationalInsurance) return ['internationalInsurance is required',undefined]
        if(!customsExpenses) return ['customsExpenses is required',undefined]
        if(!otherTransportExpenses) return ['otherTransportExpenses is required',undefined]
        if(!totalAmount) return ['totalAmount is required',undefined]
        if(!currency) return ['currency is required',undefined]
        if(!plate) return ['plate is required',undefined]
        if(!vatWithheldValue) return ['vatWithheldValue is required',undefined]
        if(!incomeTaxWithheldValue) return ['incomeTaxWithheldValue is required',undefined]
        if(!compensations) return ['compensations is required',undefined]
        if(!payments) return ['payments is required',undefined]

        return [
            undefined, 
            new InvoiceInfoDto(
                issueDate,
                establishmentAddress,
                specialTaxpayer,
                accountingObligation,
                foreignTrade,
                incoTermInvoice,
                incoTermLocation,
                countryOfOrigin,
                portOfShipment,
                portOfDestination,
                destinationCountry,
                acquisitionCountry,
                buyerIdentificationType,
                deliveryNote,
                buyerBusinessName,
                buyerIdentification,
                buyerAddress,
                totalWithoutTaxes,
                totalSubsidy,
                incoTermTotalWithoutTaxes,
                totalDiscount,
                reimbursementDocCode,
                totalReimbursementInvoices,
                totalReimbursementTaxableBase,
                totalReimbursementTax,
                totalWithTaxes.map((totalWithTaxes: any) => TotalWithTaxesDto.save(totalWithTaxes)[1]!),
                compensations.map((compensations: any) => CompensationDto.save(compensations)[1]!),
                tip,
                internationalFreight,
                internationalInsurance,
                customsExpenses,
                otherTransportExpenses,
                totalAmount,
                currency,
                plate,
                vatWithheldValue,
                incomeTaxWithheldValue,
                payments.map((payment: any) => PaymentDto.save(payment)[1]!),
                totalTaxesCodeCero,
                totalTaxesCodeTwo,
                totalTaxesCodeThree,
                totalTaxesCodeFour,
                totalTaxesCodeFive,
                totalTaxesCodeSix,
                totalTaxesCodeSeven,
                totalTaxesCodeEight,
                totalTaxesCodeTen,
                totalIce,
                totalIrbpnr
            )
        ]
    }
}