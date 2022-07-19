import { HttpClient } from "common/http";

export class BasicFeService {
    static api(data) {
        return HttpClient.fetch({
            method: 'POST',
            url: '',
            data
        })
    }
}