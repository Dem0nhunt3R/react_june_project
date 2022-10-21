import axios from "axios";

import {accessToken, baseURL} from "../constants";

export const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    config.headers['Authorization'] = 'Bearer ' + accessToken;
    return config;
})
