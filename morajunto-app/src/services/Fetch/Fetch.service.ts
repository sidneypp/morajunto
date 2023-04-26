/* eslint-disable @typescript-eslint/no-explicit-any */
import { getUser, removeUser } from "@services";
import { Exception } from "@types";
import axios, { AxiosResponse } from "axios";
import Router from "next/router";
import { IDelete, IGet, IPath, IPost, IPut } from "./Fetch.types";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
});

axiosInstance.interceptors.request.use(async (config) => {
  const user = getUser();
  if (user?.access_token) {
    config.headers = {
      Authorization: `Bearer ${user.access_token}`,
    };
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (!error.response) {
      return Promise.reject(error);
    }

    if (error.response.status === 401) {
      const user = getUser();
      if (user?.id) {
        removeUser();
        Router.push("/login");
      }
    }
    const exception: Exception = error.response.data || {
      message: "Algo deu errado",
    };
    return Promise.reject(exception);
  }
);

const fetchService = {
  get: function get<T>(props: IGet): Promise<AxiosResponse<T>> {
    return axiosInstance.get<T>(props.url, props.config);
  },
  put: function put<T, D = any>(props: IPut<D>): Promise<AxiosResponse<T>> {
    return axiosInstance.put<T>(props.url, props.data, props.config);
  },
  post: function post<T, D = any>(props: IPost<D>): Promise<AxiosResponse<T>> {
    return axiosInstance.post<T>(props.url, props.data, props.config);
  },
  patch: function patch<T, D = any>(
    props: IPath<D>
  ): Promise<AxiosResponse<T>> {
    return axiosInstance.patch<T>(props.url, props.data, props.config);
  },
  delete: function deletes<T>(props: IDelete): Promise<AxiosResponse<T>> {
    return axiosInstance.delete<T>(props.url, props.config);
  },
};

export default fetchService;
