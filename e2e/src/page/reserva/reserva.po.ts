import { browser, by, element } from 'protractor';

export class ReservaPage {

    private selectTipoReserva = element(by.css('select#tipoReserva option[value="ESTANDAR"]'))
    private fechaReserva = element(by.css('input#fechaReserva'))
    private botonReservar = element(by.css('button#btnReservar'))

    async escogerReservaEstandar() {
        browser.sleep(500)
        await this.selectTipoReserva.click()
    }

    async asignarFechaReserva(fecha: string) {
        await this.fechaReserva.sendKeys(fecha)
    }

    async clickReservar() {
        await this.botonReservar.click()
    }

}