import { by, element } from 'protractor';

export class PeliculaPage {
    private linkCrearPelicula = element(by.id('linkCrearPelicula'))
    private linkListarPeliculas = element(by.id('linkListarPelicula'))
    private inputNombrePelicula = element(by.id('nombrePelicula'))
    private inputAutorPelicula = element(by.id('autorPelicula'))
    private inputDescripcionPelicula = element(by.id('descripcionPelicula'))
    private botonCrear = element(by.id('btnCrear'))
    private inputBuscarPelicula = element(by.css('input.form-control'))
    private botonBuscar = element(by.id('btnBuscar'))
    private listaPeliculas = element.all(by.css('app-pelicula div.card-body'))
    private tituloAlertaPelicula = element(by.css('app-alert div h4.alert-heading'))
    private botonReservar = element(by.css('app-pelicula button.btn-reserva'))
    private tituloAlertaReserva = element(by.css('app-pelicula app-reserva-pelicula app-alert div h4.alert-heading'))

    async clickCrearPelicula() {
        await this.linkCrearPelicula.click()
    }

    async clickListarPeliculas() {
        await this.linkListarPeliculas.click()
    }

    async ingresarNombre(nombre: string) {
        await this.inputNombrePelicula.sendKeys(nombre)
    }

    async ingresarAutor(autor: string) {
        await this.inputAutorPelicula.sendKeys(autor)
    }

    async ingresarDescripcion(descripcion: string) {
        await this.inputDescripcionPelicula.sendKeys(descripcion)
    }

    async clickCrear() {
        await this.botonCrear.click()
    }

    async ingresarPeliculaABuscar(nombre: string) {
        await this.inputBuscarPelicula.sendKeys(nombre)
    }

    async clickBuscar() {
        await this.botonBuscar.click()
    }

    async contarPeliculas() {
        return this.listaPeliculas.count()
    }

    async conseguirTextoAlerta() {
        return this.tituloAlertaPelicula.getText()
    }

    async clickReservar() {
        await this.botonReservar.click()
    }

    async conseguirTituloAlertaReserva() {
        return this.tituloAlertaReserva.getText()
    }
}