import { Pelicula } from "src/app/feature/pelicula/shared/model/pelicula"

export class Reserva {
    id: number
    tipoReserva: string
    fechaReserva: string
    pelicula: Pelicula

    constructor(id: number, tipoReserva: string, fechaReserva: string, pelicula: Pelicula) {
        this.id = id
        this.tipoReserva = tipoReserva
        this.fechaReserva = fechaReserva
        this.pelicula = pelicula
    }
}