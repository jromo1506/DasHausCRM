import { Component } from '@angular/core';
import { LeadApiService } from 'src/app/services/lead-api.service';
import { InventarioApiService } from 'src/app/services/inventario-api.service';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

@Component({
  selector: 'app-generarcontrato',
  templateUrl: './generarcontrato.component.html',
  styleUrls: ['./generarcontrato.component.scss']
})
export class GenerarcontratoComponent {
  ListaLeads: any[] = [];
  nacionalidad: any;
  origenes: any;
  domicilio: any;
  civil: any;
  ocupacion: any;

  constructor(private leadApiService: LeadApiService, private inventarioApi:InventarioApiService) {
    this.leadApiService.getLeadsCotizado().subscribe((data: any[]) => {

      data.sort((a, b) => {
        return new Date(a.currentDate).getTime() - new Date(b.currentDate).getTime();

      });

      this.ListaLeads = data;
      // alert("Exito");
      console.log(this.ListaLeads, "LISTA LEADS");
      this.getDatosCompletos()

    }, error => {
      // alert("Error");
    });

  }

  async getDatosCompletos() {

    for (let lead of this.ListaLeads) {
      console.log(lead.idinteres)
      await this.inventarioApi.getInventarioById(lead.idinteres).subscribe(data=>{
        
        console.log(data,"interes");

        lead.manzana = data.manzana;
        lead.lote = data.lote;
        lead.medidas = data.medidas;
        lead.medidas = data.medidas;
        lead.preciovente = data.precioventa;

    });
    console.log(lead)
    }
    console.log(this.ListaLeads, "LISTA con datos extra");
  }

  async createPdf(modelo: any, etapa: any, medidas: any, manzana: any, lote: any, frac: any, medTer: any, colind: any, nombre: any, nacionalidad: any, origenes: any, domicilio: any, civil: any, ocupacion: any, costototal: any, costotexto: any, fecha: any) {


    var mensualidades = 'aaaaa';

    const docDefinition = {
      content: [
        {
          text: [
            { text: 'CONTRATO DE PROMESA QUE CELEBRAN POR UNA PARTE LA EMPRESA DENOMINADA “DAS HAUS DESARROLLOS S.A. DE C.V. REPRESENTADA EN ESTE ACTO POR EL SEÑOR ING. GABRIEL ALBERTO MORENO ZARATE A QUIEN EN LO SUCESIVO SE LE DENOMINARÁ “EL VENDEDOR” Y POR LA OTRA ' + nombre + ', A QUIEN EN ADELANTE SE LE DENOMINARÁ COMO “EL CLIENTE” AL TENOR DE LAS SIGUIENTES DECLARACIONES Y CLAUSULAS:\n\n', bold: true },
          ]
        },
        {
          text: [
            { text: 'DECLARACIONES:\n\n\n\n', bold: true, alignment: 'center' },
          ]
        },
        {
          text: [
            { text: 'I.- DECLARA “DAS HAUS DESARROLLOS”:\n\n', bold: true, alignment: 'justify' },
          ]
        },
        {
          text: [
            { text: 'A) .-', bold: true },
            'Que  es una sociedad mercantil debidamente constituida mediante Escritura Pública número 46541, de fecha 20 de marzo de 2019, pasada ante la fe del Licenciado JOSE LUIS SERNA DE LARA, Notario Público Número Catorce del Estado de Aguascalientes, y que su representante GABRIEL ALBERTO MORENO ZARATE, con carácter de Administrador Único, cuenta con las facultades necesarias para la celebración del presente contrato, mismas que se desprenden de la  escritura pública descrita en este inciso, en la cual, le fueron otorgados poderes amplísimos de representación de la sociedad, declarando bajo protesta de decir verdad que las facultades que le fueron conferidas no le han sido modificadas o revocadas en forma alguna. \n\n',
          ]
        },
        {
          text: [
            { text: 'B) .-', bold: true },
            'Que tiene su domicilio en Av. Universidad No. 1001, Edificio Torre Plaza Bosques, piso 5, interior 501, Fracc. Bosques del Prado, Aguascalientes, Ags. CP 20127, mismo que señala para todos los efectos legales relativos a la celebración del presente Contrato.  \n\n',
          ]
        },
        {
          text: [
            { text: 'C) .-', bold: true },
            'Que su representado(a) ha celebrado un convenio de negocios, por virtud del cual cuenta con los derechos, entre otros, sobre la casa ',
            { text: modelo + ' de ' + medidas + ' de construcción que se construirá en el lote ', bold: true },
            'ubicado en la etapa ',
            { text: etapa + ' de la manzana ' + manzana + ' lote ' + lote + ' del Fraccionamiento ' + frac + ', con las siguiente superficie de terreno, medidas y colindancias; superficie de ' + medTer + ', colindando ' + colind + ' y para efectos del presente contrato, se le denominará como “EL INMUEBLE”.\n\n', bold: true },
          ]
        },
        {
          text: [
            { text: 'D) .-', bold: true },
            'Que de conformidad con el convenio de negocios señalado en el inciso que antecede, está facultada y ha realizado todos los trámites que establecen las leyes aplicables al caso para celebrar contratos preparatorios con respecto a ',
            { text: '“EL INMUEBLE”.\n\n', bold: true },
          ]
        },
        {
          text: [
            { text: 'H) .-', bold: true },
            'Que de conformidad con las licencias, autorizaciones y permisos respectivos emitidos por autoridad competente, ',
            { text: 'EL INMUEBLE ', bold: true },
            'cuenta con la infraestructura para el adecuado funcionamiento de los servicios de suministro de energía eléctrica, agua potable, drenaje y alcantarillado, y demás obras de equipamiento urbano.',
          ]
        },
        {
          text: [
            { text: 'I) .-', bold: true },
            'Que es su deseo el celebrar el presente contrato con ',
            { text: '“EL CLIENTE”.\n\n', bold: true },

          ]
        },

        {
          text: [
            { text: 'II.- DECLARA “EL CLIENTE”:\n\n', bold: true },

          ]
        },

        {
          text: [
            { text: 'A) .-', bold: true },
            'Ser ' + nacionalidad + ', originario de ' + origenes + ', de estado civil ' + civil + ', mayor de edad, de ocupación ' + ocupacion + ', con domicilio particular en ' + domicilio + ' y que tiene capacidad legal para obligarse y celebrar el presente contrato de promesa de compraventa.\n\n'

          ]
        },

        {
          text: [
            { text: 'B) .-', bold: true },
            'Que es su voluntad celebrar el presente contrato de promesa, ya que está interesado(a) en adquirir',
            { text: ' “EL INMUEBLE” ', bold: true },
            'que se describe en el presente contrato, y manifiesta que conoce y está de acuerdo las características del mismo, conforme a los términos y condiciones pactados en el presente instrumento.\n\n'
          ]
        },
        {
          text: [
            { text: 'C) .-', bold: true },
            'Que se obliga a respetar y hacer cumplir los lineamientos y restricciones previstos en el Reglamento de la Asociación de Colonos o en el Reglamento del Régimen de la Propiedad en Condominio a que se sujetará  mediante la adquisición de “EL INMUEBLE”, de ser el caso.\n\n'
          ]
        },

        {
          text: [
            { text: 'III.- De las partes en conjunto:\n\n', bold: true },

          ]
        },

        {
          text: [
            { text: 'A) .-', bold: true },
            'Que atentos a las declaraciones anteriores  y reconociéndose mutuamente la capacidad y facultades  con que comparecen para la celebración  del presente contrato, lo otorgan de conformidad con las siguientes:\n\n'
          ]
        },


        {
          text: [
            { text: 'CLAUSULAS\n\n', bold: true, alignment: 'center' },

          ]
        },

        {
          text: [
            { text: 'PRIMERA: OBJETO.- ', bold: true },
            'Por el presente Contrato “EL VENDEDOR”, promete llevar a cabo los actos necesarios para transferir la propiedad de “EL INMUEBLE” descrito en el inciso C) de la declaración I del presente contrato a “EL CLIENTE” quién por su parte se obliga a cumplir con todas y cada una de las obligaciones establecidas en el presente Contrato, en la forma y plazos previstos para tales efectos.\n\n'
          ]
        },

        {
          text: [
            { text: 'SEGUNDA: TERMINO DEL CONTRATO .- “LAS PARTES”', bold: true },
            'convienen en que la celebración del contrato definitivo que ampare la transmisión de la propiedad de',
            { text: ' “EL INMUEBLE” ', bold: true },
            'y que es objeto del presente contrato, se deberá llevar a cabo, ante Notario Público, una vez que la casa esté terminada en la fecha estipulada entre las partes.\n\n'
          ]
        },

        {
          text: [
            { text: 'TERCERA: CONDICION SUSPENSIVA.-', bold: true },
            'Las partes acuerdan que se reunirán en el domicilio de “EL VENDEDOR” al término del plazo estipulado  en la cláusula segunda del presente contrato, para continuar con el trámite de la escritura definitiva.\n\n',
            'En caso de incumplimiento por parte de “EL CLIENTE”, a lo estipulado en la presente cláusula, “EL VENDEDOR” queda eximido de cualquier responsabilidad ya sea por la no tramitación de la escritura definitiva o por la terminación del presente contrato.\n\n',
            'Las partes acuerdan en que una vez que se haya cumplido la presente condición, el presente contrato tendrá la fuerza legal necesaria en todos sus derechos y obligaciones.\n\n',
          ]
        },

        {
          text: [
            { text: 'CUARTA: FORMALIZACIÓN DEL CONTRATO DEFINITIVO.-', bold: true },
            'Las partes convienen en que será a elección de “EL VENDEDOR” la designación del Notario Público que formalizará la escritura de propiedad definitiva.\n\n',
            'Así mismo, a la formalización de la escritura de propiedad definitiva deberá comparecer “EL CLIENTE” y “EL VENDEDOR”, éste último garantizando los vicios ocultos que se pudiesen presentar en las construcciones que haya efectuado sobre “EL INMUEBLE”, por un término de un año contado a partir de su fecha de conclusión.\n\n',
          ]
        },

        {
          text: [
            { text: 'QUINTA: DERECHOS DE TERCEROS.-', bold: true },
            'Las partes convienen en que el presente contrato  surte efecto a partir de la fecha de firma del mismo, por lo que ningún derecho a favor de tercero constituido por voluntad de “EL VENDEDOR” a partir de esa fecha surtirá efecto entre las partes.\n\n',
          ]
        },

        {
          text: [
            { text: 'SEXTA: PRECIO.- ', bold: true },
            'El precio que “EL CLIENTE” se obliga a cubrir por la transmisión de la propiedad de “EL INMUEBLE”, la que se llevará a cabo ante notario público, será la cantidad de',
            { text: ' ' + costototal + ' M.N.  (' + costotexto + ') ', bold: true },
            'misma que',
            { text: ' “EL CLIENTE” ', bold: true },
            'se obliga a pagar a más tardar el día del otorgamiento de la escritura de propiedad respectiva, en moneda nacional.\n\n'
          ]
        },

        {
          text: [
            { text: 'SÉPTIMA: FORMA DE PAGO.- ', bold: true },
            '“LAS PARTES” convienen que el precio pactado en la cláusula sexta, respecto de “EL INMUEBLE” deberá cubrirse mediante depósito firme en la cuenta y conforme a las referencias que se indican a continuación:\n\n\n',
          ]
        },
        {
          text: [
            { text: 'Banco:\n\n', bold: true },
            { text: 'Titular: BANCOMER\n\n', bold: true },
            { text: 'Cuenta Bancaria: 0116588603\n\n', bold: true },
            { text: 'Cuenta CLABE: 012010001165886036\n\n', bold: true },
            { text: 'Titular de la cuenta : DAS HAUS DESARROLLOS SA DE CV\n\n', bold: true },
            { text: 'Las partes están de acuerdo en que “EL CLIENTE” deberá haber depositado el monto total del precio pactado a mas tardar el día del otorgamiento de las escrituras de propiedad correspondientes, por lo que se obliga a efectuar depósitos parciales conforme al siguiente calendario:\n\n', bold: true },
            { text: 'DEPÓSITO\n\n', bold: true },
            { text: 'IMPORTE EN PESOS\n\n', bold: true },
            { text: '(IMPORTE CON LETRA)\n\n', bold: true },
            { text: 'CONCEPTO\n\n', bold: true },
            { text: 'VENCIMIENTO\n\n', bold: true },
          ]
        },
        mensualidades,
        {
          text: [
            'En caso de que con posterioridad a la firma del presente instrumento existiera algún acuerdo de ambas partes por cualquier discrepancia o modificacion en las dimensiones del “INMUEBLE”, se hará el ajuste respectivo en el precio del INMUEBLE y en consiguiente en la escritura ',
            { text: 'definitiva en que conste la transmisión de propiedad del INMUEBLE.\n\n', bold: true },
          ]
        },
        {
          text: [
            'Los depósitos estipulados deberán realizarse en la cuenta bancaria referida con antelación.  Así mismo las partes acuerdan expresamente que el incumplimiento en alguno de los depósitos aquí estipulados, ocasionará y en su caso será causa de rescisión del mismo sin responsabilidad para “EL VENDEDOR”.\n\n',
          ]
        },
        {
          text: [
            'En caso que “EL CLIENTE” no lleve a cabo cualquiera de los depósitos de las cantidades pactadas de forma oportuna, se generará un interés moratorio igual al 3% mensual sobre la cantidad no cubierta oportunamente, hasta la total liquidación del adeudo.\n\n',
          ]
        },
        {
          text: [
            { text: 'OCTAVA: ENTREGA DE “EL INMUEBLE”.- ', bold: true },
            '“EL VENDEDOR” se obliga a llevar a cabo las acciones que permitan entregar y a transmitir la propiedad de “EL INMUEBLE” objeto del presente Contrato, una vez que sea pagado por “EL CLIENTE” el total del precio pactado y una vez que se haya formalizado definitivamente la escritura de propiedad correspondiente (extinción parcial de fideicomiso, en su caso) ante Notario Público, en términos de la fecha estipulada en la cláusula segunda del presente contrato.\n\n',
          ]
        },
        {
          text: [
            '“EL VENDEDOR” llevará a cabo las acciones necesarias para entregar  la posesión real y material de “EL INMUEBLE” libre de todo adeudo de carácter fiscal, local o federal, así como de aquéllos derivados de servicios de conservación o pagos administrativos requeridos por las autoridades en el plazo pactado en la cláusula segunda, siempre y cuando se haya pagado en su totalidad el precio pactado por “EL INMUEBLE”.\n\n',
          ]
        },
        {
          text: [
            { text: 'NOVENA: GASTOS DE ESCRITURACIÓN E IMPUESTOS.- ', bold: true },
            'Las partes convienen en que los gastos que se generen con motivo de la escrituración de “EL INMUEBLE” objeto del presente Contrato correrán a cargo de “EL CLIENTE”; así mismo las partes están de acuerdo en que los impuestos, contribuciones u otras cargas fiscales deberán ser cubiertas por la parte a la que la legislación de la materia imponga dicha obligación.\n\n',
          ]
        },
        {
          text: [
            { text: 'DÉCIMA.- ', bold: true },
            'Las partes reconocen y aceptan que el presente contrato representa el total acuerdo entre éstas, dejando sin efecto cualquier otra comunicación, ya sea oral o escrita anterior a su firma, y que en su celebración no existe dolo, mala fe, violencia, error ni ningún otro vicio que pueda invalidar el presente contrato.\n\n',
          ]
        },
        {
          text: [
            { text: 'DÉCIMA PRIMERA: DOMICILIOS.- ', bold: true },
            'Las partes señalan como sus domicilios para todo lo relativo al cumplimiento de las obligaciones pactadas en este contrato, los señalados en el capítulo de declaraciones del presente contrato.\n\n',
          ]
        },
        {
          text: [
            { text: 'DECIMA SEGUNDA: LEGISLACIÓN APLICABLE.- ', bold: true },
            'La Procuraduría Federal del Consumidor (PROFECO) es competente en la vía administrativa para resolver cualquier controversia que se suscite sobre la interpretación o cumplimiento del presente contrato.  Sin perjuicio de lo anterior, las partes acuerdan que para la interpretación y cumplimiento de lo pactado en el presente contrato, las partes se someten expresamente a la jurisdicción y competencia de los tribunales de la ciudad de Aguascalientes, Ags., renunciando expresamente a cualquier otro fuero que en razón de sus domicilios presentes o futuros o por cualquier otra causa, pudiera corresponderles.\n\n',
          ]
        },
        {
          text: [
            'Leído que fue el presente Contrato de Promesa de Compraventa, que consta de 5 hojas útiles por un solo lado y estando ',
            { text: '“LAS PARTES” ', bold: true },
            'de acuerdo con su contenido, lo firman por duplicado, ante los testigos que también firman, en la ciudad de Aguascalientes, Ags., a ' + fecha + '.\n\n\n\n',
          ]
        },
        {
          text: [
            { text: '“LAS PARTES”\n\n\n', bold: true, alignment: 'center' },
            { text: '“EL VENDEDOR”\n\n', bold: true, alignment: 'center' },
            { text: 'ING. GABRIEL ALBERTO MORENO ZARATE\n\n', bold: true, alignment: 'center' },
            { text: 'DAS HAUS DESARROLLOS SA DE CV\n\n', bold: true, alignment: 'center' },
            { text: '\n\n\n\n', bold: true },
            { text: '“EL CLIENTE”\n\n', bold: true, alignment: 'center' },
            { text: nombre + '\n\n', bold: true, alignment: 'center' },
            { text: '\n\n\n\n', bold: true },
            { text: 'TESTIGO                                                                              TESTIGO', bold: true, alignment: 'center' },
          ]
        },
      ]
    };

    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    pdfMake.createPdf(docDefinition).download('userdata.pdf');
  }





  saveByteArray(reportName: any, byte: any) {
    var blob = new Blob([byte], { type: "application/pdf" });
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    var fileName = reportName;
    link.download = fileName;
    link.click();
  };
}
