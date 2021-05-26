import { TRMData } from "./trm-data";

export class TRMResponse {
    data: TRMData
    web: string

    constructor(data: TRMData, web: string) {
        this.data = data
        this.web = web
    }
}