import DetalleAdicionalDto from "./detalleAdicional.dto";
import ImpuestoDto from "./impuesto.dto";

export default class DetalleDto {
    constructor(
        public codigoPrincipal: string,
        public codigoAuxiliar: string,
        public descripcion: string,
        public unidadMedida: string,
        public cantidad: string,
        public precioUnitario: string,
        public descuento: string,
        public precioTotalSinImpuesto: string,
        public detallesAdicionales: string,
        public impuestos: {impuesto: ImpuestoDto[]}
    ) {}

    static create(object:{[key:string]:any}): [string?, DetalleDto?] {
        const { id, uuid, invoiceId, mainCode, auxiliaryCode, description, unitOfMeasure, quantity, unitPrice, priceWithoutSubsidy, discount, totalPriceWithoutTax, additionalDetails, taxes, createdAt, updatedAt, deletedAt} = object
        
        let xml = '';

        for (let i = 0; i < additionalDetails.length; i++) {
            const element = additionalDetails[i];
            const [errorDetalleAdicional, detalleAdicionalDto] = DetalleAdicionalDto.create(element)
            xml += `\n <detAdicional nombre="${detalleAdicionalDto!.nombre}" valor="${detalleAdicionalDto!.valor}"></detAdicional>\n`;
        }        

        let impuestosObject = {impuesto: [] as ImpuestoDto[]}

        for (let i = 0; i < taxes.length; i++) {
            const element = taxes[i];
            const [errorImpuesto, impuestoDto] = ImpuestoDto.create(element)
            impuestosObject.impuesto.push(impuestoDto!)
        }

        return [
            undefined, 
            new DetalleDto(
                mainCode,
                auxiliaryCode,
                description,
                unitOfMeasure,
                quantity,
                unitPrice,
                discount,
                totalPriceWithoutTax,
                xml,
                impuestosObject
            )
        ]
    }
}