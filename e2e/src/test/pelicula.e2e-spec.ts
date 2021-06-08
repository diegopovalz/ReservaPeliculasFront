import { NavbarPage } from '../page/navbar/navbar.po';
import { AppPage } from '../app.po';
import { PeliculaPage } from '../page/pelicula/pelicula.po'
import { ReservaPage } from '../page/reserva/reserva.po'

describe('workspace-project pelicula', () => {
    let page: AppPage
    let navBar: NavbarPage
    let pelicula: PeliculaPage
    let reserva: ReservaPage

    beforeEach(() => {
        page = new AppPage();
        navBar = new NavbarPage();
        pelicula = new PeliculaPage();
        reserva = new ReservaPage();
    });

    it('deberia crear pelicula', () => {
        const NOMBRE = 'Prueba'
        const AUTOR = 'Autor'
        const DESCRIPCION = 'Descripcion'

        page.navigateTo()
        navBar.clickBotonPeliculas()
        pelicula.clickCrearPelicula()
        pelicula.ingresarNombre(NOMBRE)
        pelicula.ingresarAutor(AUTOR)
        pelicula.ingresarDescripcion(DESCRIPCION)
        pelicula.clickCrear()
        expect(pelicula.conseguirTextoAlerta()).toEqual('Película creada')
    })

    it('deberia listar peliculas', () => {
        page.navigateTo()
        navBar.clickBotonPeliculas()
        pelicula.clickListarPeliculas()
        expect(pelicula.contarPeliculas()).toBeGreaterThan(0)
    })

    it('deberia mostrar error buscando pelicula que no existe', () => {
        const NOMBRE = 'TestNoExiste'

        page.navigateTo()
        navBar.clickBotonPeliculas()
        pelicula.clickListarPeliculas()
        pelicula.ingresarPeliculaABuscar(NOMBRE)
        pelicula.clickBuscar()
        expect(pelicula.conseguirTextoAlerta()).toEqual('Error')
    })

    it('deberia mostrar un valor de 20 cuando el tipo es Estandar', () => {
        page.navigateTo()
        navBar.clickBotonPeliculas()
        pelicula.clickListarPeliculas()
        pelicula.clickReservar()
        reserva.escogerReservaEstandar()
        expect(reserva.conseguirTextoValor()).toEqual('20')
    })

    it('deberia mostrar un valor de 50 cuando el tipo es Premium', () => {
        page.navigateTo()
        navBar.clickBotonPeliculas()
        pelicula.clickListarPeliculas()
        pelicula.clickReservar()
        reserva.escogerReservaPremium()
        expect(reserva.conseguirTextoValor()).toEqual('50')
    })

    it('deberia crear una reserva', () => {
        page.navigateTo()
        navBar.clickBotonPeliculas()
        pelicula.clickListarPeliculas()
        pelicula.clickReservar()
        reserva.escogerReservaEstandar()
        reserva.asignarFechaReserva('05-24-2021')
        reserva.clickReservar()
        expect(pelicula.contarPeliculas()).toBe(0)
    })
})