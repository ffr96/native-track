/**
 * Allow to check what type of error status the server sent to us.
 *
 * If a status is of type 300-400 (404 -not found-, 400 -invalid-, etc) we
 * **intercept it** and can return an appropiate value for that.
 *
 * * Server-side errors (500s) **won't be considered** with ValidateErrors
 * so catching might be needed.
 */

export const ValidateErrors = (status: number) => (status < 500 ? true : false);

/**
 * Receives a date (string) stored on training log and slices it
 * Or takes no argument and returns current date.
 * @param str Date stored on training log
 * @returns
 */

export const getDate = (str?: string) => {
  let date;
  if (str) date = new Date(str).toString().slice(0, 24);
  else date = Date().toString().slice(0, 24);
  return date;
};

export const capitalizeFirstLetter = (str: string) => {
  if (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
};
