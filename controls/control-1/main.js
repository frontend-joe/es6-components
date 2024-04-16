const usernames = ["david", "david1", "david2"];

const input = document.querySelector("#input"),
  spinner = document.querySelector(".spinner"),
  button = document.querySelector("button");

const updateUi = (value) => {
  console.log("value", value);
  spinner.classList.remove("visible");

  const usernameExists = usernames.some((u) => u === value);

  console.log("usernames", usernames);
  console.log("usernameExists", usernameExists);

  const invalid = usernameExists || !value;

  button.disabled = invalid;
  input.classList.toggle("valid", !invalid);
};

const debounce = (callback, time) => {
  let interval;
  return (...args) => {
    clearTimeout(interval);
    interval = setTimeout(() => {
      callback.apply(null, args);
    }, time);
  };
};

const handleStartTyping = () => {
  spinner.classList.add("visible");
};

const handleChange = debounce((input) => {
  const { value } = input.target;

  console.log("input", input);

  input.target.classList.toggle("has-value", value);

  updateUi(value);
}, 500);
