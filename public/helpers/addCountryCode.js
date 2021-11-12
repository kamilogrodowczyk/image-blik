import intlTelInput from "intl-tel-input";
import utilsScript from "../../node_modules/intl-tel-input/build/js/utils.js?1613236686837";

const inputsPhone = document.querySelectorAll('input[name="phone"]');
const iti = [];

const options = {
  utilsScript,
  initialCountry: "pl",
  preferredCountries: ["pl"],
  onlyCountries: ["pl", "de", "gb", "us"],
};

export const addIntlTelInputToArray = () => {
  for (let i = 0; i < inputsPhone.length; ++i) {
    iti[i] = intlTelInput(inputsPhone[i], options);
  }
};

export const addCountryCode = () => {
  inputsPhone.forEach((input, index) => {
    if (input.value) {
      input.value = `${iti[index].getSelectedCountryData().dialCode}${
        input.value
      }`;
    }
  });
};
