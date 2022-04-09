import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import HttpStatus from "http-status-codes";
import {AppContext} from "./ApiContext";
import {navigate} from "gatsby";

function setToken(config: AxiosRequestConfig): void {
    const token = AppContext.getAccessToken()
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
}

export function setInterceptors(service: AxiosInstance): void {
    service.interceptors.request.use(
        async (config: AxiosRequestConfig) => {
            setToken(config)
            return config
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    service.interceptors.response.use(
        (response) => {
            return response.data;
        },
        (error) => {
            if (error.response && (error.response.status === HttpStatus.UNAUTHORIZED)) {
                navigate("/login")
            }

            return Promise.reject(error);
        }
    );
}

export const apiInstance: AxiosInstance = axios.create({
    baseURL: "",
    timeout: 30000,
})

setInterceptors(apiInstance)

