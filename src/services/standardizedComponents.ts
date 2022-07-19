import { HttpClient } from "common/http";

export class StandardizedComponentsService {
    static getCommonTable(data) {
        return HttpClient.fetch({
            method: 'GET',
            url: '/standardizedComponents/commonTable',
            data
        })
    }
    static getCommonList(data) {
        return HttpClient.fetch({
            method: 'GET',
            url: '/standardizedComponents/commonList',
            data
        })
    }
}