import PagoDto from "./pago.dto";
import TotalImpuestoDto from "./totalImpuesto.dto";

export default class InfoFacturaDto {
    constructor(
        public fechaEmision:string,
        public dirEstablecimiento:string,
        public tipoIdentificacionComprador:string,
        public razonSocialComprador:string,
        public identificacionComprador:string,
        public direccionComprador:string,
        public totalSinImpuestos:string,
        public totalDescuento:string,
        public totalConImpuestos:{totalImpuesto:TotalImpuestoDto[]},
        public propina:string,
        public importeTotal:string,
        public moneda:string,
        public pagos:{pago:PagoDto[]}
    ){}
    static create(object:{[key:string]:any}): [string?, InfoFacturaDto?] {
        const {
            id,
            uuid,
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
            compensations,
            payments,
            totalWithTaxes,
            invoiceId,
            createdAt,
            updatedAt,
            deletedAt
        } = object

        let totalImpuestosObject = {
            totalImpuesto:[] as TotalImpuestoDto[]
        }

        for (let i = 0; i < totalWithTaxes.length; i++) {
            const element = totalWithTaxes[i];
            const [errorTotalImpuesto, totalImpuestoDto] = TotalImpuestoDto.create(element)
            totalImpuestosObject.totalImpuesto.push(totalImpuestoDto!)
        }

        let pagosObject = {
            pago:[] as PagoDto[]
        }

        for (let i = 0; i < payments.length; i++) {
            const element = payments[i];
            const [errorPago, pagoDto] = PagoDto.create(element)
            pagosObject.pago.push(pagoDto!)
        }

        return [
            undefined, 
            new InfoFacturaDto(
                issueDate,
                establishmentAddress,
                buyerIdentificationType,
                buyerBusinessName,
                buyerIdentification,
                buyerAddress,
                totalWithoutTaxes,
                totalDiscount,
                totalImpuestosObject,
                tip,
                totalAmount,
                currency,
                pagosObject
            )
        ]
    }
}