export const REGEX = {
  email: /^[a-zA-z]+[a-zA-z.-_\d\W]*@([a-z]+\.)+[a-z]{2,4}$/g,
  name: /^[\sa-zA-Z]+( [a-zA-Z]+)*(-[a-zA-Z\s]+)?$/,
  password: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]*)(?!.*\s).{8,50}$/,
  phoneNumber: /^[7-9][0-1][0-9]+$/,
  specialCharacter: /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/,
  numbers: /[0-9]/,
  capsCheck: /[A-Z]/,
};

/**
 * error messages for every input field
 */

export const errorMessages = {
  email: "Email is not valid",
  maxChar: (num) => `This field cannot have more than ${num} characters`,
  minChar: (num) => `This field must be at least ${num} characters`,
  minLowerCase: (num) => `This field must be at least ${num} lower case character`,
  minUpperCase: (num) => `This field must be at least ${num} upper case character`,
  minNumber: (num) => `This field must be at least ${num} number`,
  minSymbol: (num) => `This field must be at least ${num} special character`,
  required: "This field is compulsory",
  passwordMatch: "Passwords dont match",
};

/**
 * Status for various responses
 */
export const Status = {
  FAILED: "failed",
  SUCCESS: "success",
};

/**
 * Notification Types
 */
// export enum NotificationTypes {
//   ERROR = "error",
//   SUCCESS = "success",
//   INFO = "info",
// }

export function maskEmail(email) {
  const atIndex = email?.indexOf("@");
  const dotIndex = email?.indexOf(".");

  if (atIndex !== -1 && dotIndex !== -1) {
    const maskedEmail = email?.substring(0, 1) + "*".repeat(atIndex - 1) + email?.substring(atIndex, atIndex + 1) + "*".repeat(dotIndex - atIndex - 1) + email?.substring(dotIndex);

    return maskedEmail;
  } else {
    // Handle invalid email format
    return email;
  }
}
