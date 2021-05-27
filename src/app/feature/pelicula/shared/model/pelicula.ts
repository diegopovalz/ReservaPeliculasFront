export class Pelicula {
    id?: number
    nombre?: string
    autor?: string
    descripcion?: string

    constructor(nombre: string, autor?: string, descripcion?: string, id?: number) {
        this.nombre = nombre
        this.autor = autor
        this.descripcion = descripcion
        this.id = id
    }
}