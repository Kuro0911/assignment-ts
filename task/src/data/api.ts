import axios from 'axios';

export const serverURL = "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs";

export const api = axios.create({
  baseURL: serverURL,
});
export const AUTH = "auth/login"

export const api_login = (data) => {
  const request = api.post(AUTH, data);
  return request;
};