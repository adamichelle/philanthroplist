export const charityNameValidator = (value) =>
  !value
    ? "Charity Name is required"
    : value.length < 5
    ? "Charity Name should be at least 5 characters long."
    : "";
export const requiredValidator = (value) =>
    value ? "" : "Error: This field is required.";
