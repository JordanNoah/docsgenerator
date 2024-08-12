//inicializador del mapeo de la factura a xml para el sri

import CampoAdicionalDto from "./campoAdicional.dto";
import DetalleDto from "./detalle/detalle.dto";
import InfoFacturaDto from "./infoFactura/infoFactura.dto";
import InfoTributariaDto from "./infoTributaria.dto";

export default class InvoiceXmlDto {
    constructor(
        public infoTributaria: InfoTributariaDto,
        public infoFactura: InfoFacturaDto,
        public detalles: {detalle: DetalleDto[]},
        public infoAdicional: string[]
    ) {}
    static create(object:{[key:string]:any}): [string?, InvoiceXmlDto?] {
        const {financialInformationDto,invoiceInfoDto,detailsDto,invoiceAdditionalDetailsDto} = object
        
        const [errorInfoTributariaDto, infoTributariaDto] = InfoTributariaDto.create(financialInformationDto)
        const [errorInfoFacturaDto, infoFacturaDto] = InfoFacturaDto.create(invoiceInfoDto)
        
        let detallesObject = {detalle: [] as DetalleDto[]}

        for (let i = 0; i < detailsDto.length; i++) {
            const element = detailsDto[i];
            const [errorDetalle, detalleDto] = DetalleDto.create(element)
            detallesObject.detalle.push(detalleDto!)
        }

        let infoAdicional = invoiceAdditionalDetailsDto.map((element:any) => {
            const [errorCampoAdicional, campoAdicionalDto] = CampoAdicionalDto.create(element);
                return campoAdicionalDto!.campoAdicional;
        }).join('')

        
        return [undefined, new InvoiceXmlDto(infoTributariaDto!, infoFacturaDto!, detallesObject,infoAdicional)]
    }
}