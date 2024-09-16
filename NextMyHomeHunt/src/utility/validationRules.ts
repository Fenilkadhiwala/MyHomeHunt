export const requireField = (value: string, fieldName: string) =>
  !value ? `Please enter ${fieldName}` : null;

export const validateLength = (
  value: string,
  fieldName: string,
  expectedLength: number
) =>
  value.length !== expectedLength
    ? `${fieldName} should be at least 6 digits long`
    : null;

export const validateEmail = (value: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ? null
    : "Enter a valid email";

export const validatePassword = (value: string) =>
  !value ||
  value.length < 8 ||
  !/[A-Z]/.test(value) ||
  !/[0-9]/.test(value) ||
  !/[!@#$%^&*(),.?":{}|<>]/.test(value)
    ? "Password must be at least 8 characters long and contain at least one uppercase letter, one number, and one special character"
    : null;
