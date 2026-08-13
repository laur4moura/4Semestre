import axios from "axios";

const apiPort = "3000";
const apiUri = "172.16.2.31";

const localApi = `http://${apiUri}:${apiPort}`;

const externalApi = null;

const api = axios.create({
    baseURL : localApi
})

export default api;