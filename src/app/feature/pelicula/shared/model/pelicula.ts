export class Pelicula {
    id?: number
    nombre: string
    autor: string
    descripcion: string

    constructor(id: number, nombre: string, autor: string, descripcion: string) {
        this.id = id
        this.nombre = nombre
        this.autor = autor
        this.descripcion = descripcion
    }
}