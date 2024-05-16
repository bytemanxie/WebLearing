import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'

class HYRequest {
    constructor(baseURL, timeout=10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })
    }

    async request(config) {
        try {
            const response = await this.instance.request(config);
            return response.data;
        } catch (err) {
            throw err;
        }
    }

    get(config) {
        // console.log({...config})
        return this.request({ ...config, method: "get" })
    }

    post(config) {
        return this.request({ ...config, method: "post" })
    }
}

export default new HYRequest(BASE_URL, TIMEOUT)


