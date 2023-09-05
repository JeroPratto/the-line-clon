export const FirstNameRules = [
  (value: string) => {
    if (value) return true;
    return "Please enter your first name";
  },
];

export const LastNameRules = [
  (value: string) => {
    if (value) return true;
    return "Please enter your last name";
  },
];

export const EmailRules = [
  (value: string) => {
    if (value) return true;

    return "E-mail is required.";
  },
  (value: string) => {
    if (/.+@.+\..+/.test(value)) return true;

    return "Email must be valid.";
  },
];

export const SelectRules = [(value: string) => !!value || "Item is required"];
export const CheckboxRules = [
  (value: string) => !!value || "You must agree to continue!",
];
