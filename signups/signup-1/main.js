const bars = document.querySelector("#bars"),
  strengthDiv = document.querySelector("#strength"),
  passwordInput = document.querySelector("#password");

const strength = {
  1: "weak",
  2: "medium",
  3: "strong",
};

const getIndicator = (password, strengthValue) => {
  strengthValue.upper = /[A-Z]/.test(password);
  strengthValue.lower = /[a-z]/.test(password);
  strengthValue.numbers = /\d/.test(password);

  let strengthIndicator = 0;

  for (let metric in strengthValue) {
    if (strengthValue[metric] === true) {
      strengthIndicator++;
    }
  }

  return strength[strengthIndicator] ?? "";
};

const getStrength = (password) => {
  let strengthValue = {
    upper: false,
    numbers: false,
    lower: false,
  };

  return getIndicator(password, strengthValue);
};

const handleChange = () => {
  let { value: password } = passwordInput;

  console.log(password);

  const strengthText = getStrength(password);

  bars.classList = "";

  if (strengthText) {
    strengthDiv.innerText = `${strengthText} Password`;
    bars.classList.add(strengthText);
  } else {
    strengthDiv.innerText = "";
  }
};
