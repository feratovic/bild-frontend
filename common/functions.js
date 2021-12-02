export const checkIfEmpty = (data) => {
  if (!data) return true;

  if (data.trim().length === 0) {
    return true;
  }

  return false;
};

export const validateEmail = (data) => {
  if (!data) return false;

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  return validEmailRegex.test(data);
};
