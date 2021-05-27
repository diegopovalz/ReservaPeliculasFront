import { Pelicula } from "src/app/feature/pelicula/shared/model/pelicula"

export class Reserva {
    id?: number
    tipoReserva?: string
    fechaReserva?: string
    pelicula?: Pelicula

    constructor(tipoReserva?: string, fechaReserva?: string, pelicula?: Pelicula, id?: number) {
        this.tipoReserva = tipoReserva
        this.fechaReserva = fechaReserva
        this.pelicula = pelicula
        this.id = id
    }
}