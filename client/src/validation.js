/* eslint-disable no-console */

export const requiredGiftNameLength = 4;
export const urlValidationRegex = '(https?:\\/\\/)?([\\da-z\\.-]+)\\.([a-z\\.]{2,6})([\\/\\w \\.-]*)*\\/?';
export const minQuantity = 1;
export const maxQuantity = 99;

export const requiredFieldMessage = 'Required Field';
export const requiredLengthMessage = function (number) { return 'Must be at least ' + number + ' characters'; }
export const numberBetween = function(min, max) { return 'Must be a number from ' + min + ' - ' + max; }
export const mustSelectOneOrMore = 'Must Make At Least One Selection';

export function validateGiftName(name) {
  const errorMessages = {
    length: requiredLengthMessage(requiredGiftNameLength),
    required: requiredFieldMessage
  }

  switch (true) {
    case !name:
      return errorMessages.required;
    case name.length < requiredGiftNameLength:
      return errorMessages.length;
    default:
      return false;
  }
}

export function validateUrl(url) {
  const errorMessages = {
    invalid: 'Please enter a valid url.',
    required: requiredFieldMessage
  }

  switch (true) {
    case !url:
      return errorMessages.required;
    case !url.match(urlValidationRegex):
      return errorMessages.invalid;
    default:
      return false;
  }
}

export function validateQuantity(number) {
  const errorMessages = {
    invalidLength: numberBetween(minQuantity, maxQuantity),
    required: requiredFieldMessage
  }

  switch (true) {
    case !number:
      return errorMessages.required;
    case (number < minQuantity || number > maxQuantity):
      return errorMessages.invalidLength;
    default:
      return false;
  }
}

