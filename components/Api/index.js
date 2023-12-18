import axios from "axios";
import { baseUrl } from "config";

export const SignInUser = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/api/Auth/login`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const CreateUser = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/api/Customer`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getUserDetails = async (email) => {
  try {
    const response = await axios.get(`${baseUrl}/account/customer/details/${email}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const sendPhoneOtp = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/account/send-otp`, data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const verifyPhoneOtp = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/account/verify-otp`, data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const getAllTransactionHistory = async (id) => {
  try {
    const response = await axios.post(`${baseUrl}/transactions/history?customerId=${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getCustomerWallet = async (id) => {
  try {
    const response = await axios.post(`${baseUrl}/wallets/customer?customerId=${id}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};
