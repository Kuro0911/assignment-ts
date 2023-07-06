import axios from 'axios';

export const serverURL = "https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs";

export const api = axios.create({
  baseURL: serverURL,
});
export const AUTH = "auth/login"
export const ADD_DATA = "form"

export const api_login = (data) => {
  const request = api.post(AUTH, data);
  return request;
};

export const api_put_form = async (inputData: {
  name: string;
  email: string;
  phone_number: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  pincode: number;
  country: string;
  geolocation: string;
  single_file: File | null;
  multi_ups1: File | null;
  multi_ups2: File | null;
  multi_ups3: File | null;
}, token: string): Promise<void> => {
  const formData = new FormData();
  formData.append('name', inputData.name);
  formData.append('email', inputData.email);
  formData.append('phone_number', inputData.phone_number);
  formData.append('address_1', inputData.address_1);
  formData.append('address_2', inputData.address_2);
  formData.append('city', inputData.city);
  formData.append('state', inputData.state);
  formData.append('pincode', String(inputData.pincode));
  formData.append('country', inputData.country);
  formData.append('geolocation', inputData.geolocation);
  if (inputData.single_file) {
    formData.append('single_file', inputData.single_file);
  }
  if (inputData.multi_ups1) {
    formData.append('multi_ups1', inputData.multi_ups1);
  }
  if (inputData.multi_ups2) {
    formData.append('multi_ups2', inputData.multi_ups2);
  }
  if (inputData.multi_ups3) {
    formData.append('multi_ups3', inputData.multi_ups3);
  }

  const url = 'https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/form';
  return axios.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
  });
};