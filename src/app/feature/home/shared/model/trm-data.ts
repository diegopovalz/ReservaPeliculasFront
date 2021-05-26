export class TRMData {
    unit: string
    value: number
    success: boolean
    validityFrom?: string
    validityTo?: string

    constructor(unit: string, value: number, success: boolean, validityFrom?: string, validityTo?: string) {
        this.unit = unit
        this.value = value
        this.success = success
        this.validityFrom = validityFrom
        this.validityTo = validityTo
    }
}