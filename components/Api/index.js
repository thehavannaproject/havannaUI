import { toast } from "react-toastify";
import { api } from "../../interceptor";

export const SignInUser = async (data) => {
  try {
    const response = await api.post(`/auth/login`, data);
    return response.data;
  } catch (error) {
    toast.error(error.response.data.data);
    return error;
  }
};
export const CreateUser = async (data) => {
  try {
    const response = await api.post(`/customer`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const forgotPassword = async (data) => {
  if (data) {
    try {
      const response = await api.post(`/auth/forgot-password?email=${data}`);
      return response.data;
    } catch (error) {
      return error;
    }
  }
};

export const ResetUserPassword = async (data) => {
  if (data) {
    try {
      const response = await api.post(`/auth/reset-password`, data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
};

export const UpdateUserPassword = async (data) => {
  if (data) {
    try {
      const response = await api.post(`/auth/change-password`, data);
      if(response.status === 200) {
        return response.data;
      }
    } catch (error) {
      toast.error(error.response.data.data)
      return error;
    }
  }
};

export const getUserDetails = async (email) => {
  try {
    const response = await api.get(`/customer?customerId=${email}`);
    return response.data.data;
  } catch (error) {
    return error;
  }
};

export const sendPhoneOtp = async (data) => {
  try {
    const response = await api.post(`/auth/request-otp`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const verifyPhoneOtp = async (data) => {
  try {
    const response = await api.post(`/auth/account/verify-otp`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const verifyPhoneNumber = async (data) => {
  try {
    const response = await api.post(`/auth/account/verify-phone`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllTransactionHistory = async (id) => {
  try {
    const response = await api.get(`/Transactions/get-customer-transactions?customerId=${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getCustomerWallet = async (id) => {
  if (id) {
    try {
      const response = await api.get(`/wallet?customerId=${id}`);
      return response.data.data;
    } catch (error) {
      toast.error(error.response.data.errorMessage)
      return error;
    }
  }
};

export const getCustomerPortfolio = async (id) => {
  if (id) {
    try {
      const response = await api.get(`/Portfolio?customerId=${id}`);
      return response.data.data;
    } catch (error) {
      toast.error(error.response.data.errorMessage)
      return error;
    }
  }
};

export const getCustomerProfile = async (id) => {
  if (id) {
    try {
      const response = await api.get(`/customer?customerId=${id}`);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
};

export const customerCompleteProfile = async (data) => {

  if(data) {
    try {
      const response = await api.post(`/customer/complete-profile`, data, {
        headers: "mutlipart/form-data"
      });
      return response.data
    } catch(error) {
      toast.error(error.response.data.ErrorMessage)
      return error
    }
  }
}

export const createTransaction = async (data) => {
  if (data) {
    try {
      const response = await api.post(`/transactions`, data);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
};

export const getAllListings = async (status) => {
    try {
      const response = await api.get(`/listings/all${status ? `?status=${status}` : ""}`);
      return response.data.data;
    } catch (error) {
      toast.error(error.response.data.ErrorMessage)
      return error;
    }
};

export const GetListingById = async (listingId) => {
  if(listingId) {

    try {
      const response = await api.get(`/listings?listingId=${listingId}`);
      return response.data.data;
    } catch (error) {
      return error;
    }
  }
};

export const ListingInvestment = async (data) => {
  if(data) {
    try {
      const response = await api.post(`/Investment`, data);
      if(response.status === 200) {
      return response.data.data;
      }
    } catch (error) {
      toast.error(error.response.data.errorMessage)
      return error;
    }
  }

}

export const SetTransactionPin = async (data) => {
  if(data) {
    try {
      const response = await api.post(`/Customer/create-pin`, data);
      if(response.status === 200) {
      return response.data.data;
    }
    } catch (error) {
      toast.error(error.response.data.errorMessage)
      return error;
    }
  }

}

export const UpdateTransactionPin = async (data) => {
  if(data) {
    try {
      const response = await api.post(`/Customer/update-pin`, data);
      if(response.status === 200) {
      return response.data.data;
    }
    } catch (error) {
      toast.error(error.response.data.errorMessage)
      return error;
    }
  }
}

export const GetAllBanks = async () => {
    try {
      const response = await api.post(`/Customer/bank-list`);
      if(response.status === 200) {
      return response.data.data;
    }
    } catch (error) {
      toast.error(error.response.data.errorMessage)
      return error;
    }
}

export const BankAccountNameEnquiry = async (data) => {
  if(data) {
    try {
      const response = await api.post(`/Customer/name-enquiry`, data);
      if(response.status === 200) {
      return response.data.data;
    }
    } catch (error) {
      toast.error(error.response.data.errorMessage)
      return error;
    }
  }
}

export const AddBankInfo = async (data) => {
  if(data) {
    try {
      const response = await api.post(`/Customer/add-bank-info`, data);
      if(response.status === 200) {
      return response.data.data;
    }
    } catch (error) {
      toast.error(error.response.data.errorMessage)
      return error;
    }
  }
}
