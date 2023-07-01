import { HttpClient } from "common/http";

export class BasicFeService {
    static api(data) {
        console.log('aaaaa')
        return HttpClient.fetch({
            method: 'GET',
            url: '/',
            data
        })
    }
}