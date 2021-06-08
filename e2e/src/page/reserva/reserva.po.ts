import { browser, by, element } from 'protractor';

export class ReservaPage {

    private selectTipoReservaEstandar = element(by.css('select#tipoReserva option[value="ESTANDAR"]'))
    private selectTipoReservaPremium = element(by.css('select#tipoReserva option[value="PREMIUM"]'))
    private fechaReserva = element(by.css('input#fechaReserva'))
    private valorReserva = element(by.id('valorReserva'))
    private botonReservar = element(by.css('button#btnReservar'))

    async escogerReservaEstandar() {
        browser.sleep(500)
        await this.selectTipoReservaEstandar.click()
    }

    async escogerReservaPremium() {
        browser.sleep(500)
        await this.selectTipoReservaPremium.click()
    }

    async asignarFechaReserva(fecha: string) {
        await this.fechaReserva.sendKeys(fecha)
    }

    async conseguirTextoValor() {
        return this.valorReserva.getText()
    }

    async clickReservar() {
        await this.botonReservar.click()
        browser.sleep(100)
    }

}