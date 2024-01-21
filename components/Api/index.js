import { api } from "../../interceptor";

export const SignInUser = async (data) => {
  try {
    const response = await api.post(`/api/auth/login`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const CreateUser = async (data) => {
  try {
    const response = await api.post(`/api/customer`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const forgotPassword = async (data) => {
  if (data) {
    try {
      const response = await api.post(`/api/auth/forgot-password?email=${data}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
};

export const getUserDetails = async (email) => {
  try {
    const response = await api.get(`/api/customer?customerId=${email}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const sendPhoneOtp = async (data) => {
  try {
    const response = await api.post(`/account/send-otp`, data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const verifyPhoneOtp = async (data) => {
  try {
    const response = await api.post(`/account/verify-otp`, data);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const getAllTransactionHistory = async (id) => {
  try {
    const response = await api.get(`api/Transactions?customerId=${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getCustomerWallet = async (id) => {
  if (id) {
    try {
      const response = await api.get(`/api/wallet?customerId=${id}`);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
};

export const getCustomerPortfolio = async (id) => {
  if (id) {
    try {
      const response = await api.get(`/api/Portfolio?customerId=${id}`);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
};

export const getCustomerProfile = async (id) => {
  if (id) {
    try {
      const response = await api.get(`/api/customer?customerId=${id}`);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
};

export const createTransaction = async (data) => {
  if (data) {
    try {
      const response = await api.post(`/api/transactions`, data);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
};
