const RandExp = require("randexp");
module.exports = (options = 8, personalChars = "") => {
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "1234567890";
  const specials = "!@#$%&*()_+-";

  let regex = null;
  let size = 8;
  let getLower = true;
  let getUpper = true;
  let getNumber = true;
  let getSpecial = true;
  let chars = "";

  if (typeof options == "object") {
    regex =
      typeof options.regex && options.regex != ""
        ? new RegExp(options.regex, "g")
        : regex;
    size = typeof options.size == "number" ? options.size : size;
    getLower =
      options.config && typeof options.config.lower == "boolean"
        ? options.config.lower
        : getLower;
    getUpper =
      options.config && typeof options.config.upper == "boolean"
        ? options.config.upper
        : getUpper;
    getNumber =
      options.config && typeof options.config.number == "boolean"
        ? options.config.number
        : getNumber;
    getSpecial =
      options.config && typeof options.config.special == "boolean"
        ? options.config.special
        : getSpecial;
  } else {
    if (typeof options == "number") {
      size = options;
    }
  }

  let pass = "";
  let cont = 0;
  if (regex == null) {
    if (getLower) {
      chars = chars + lower;
    }
    if (getUpper) {
      chars = chars + upper;
    }
    if (getNumber) {
      chars = chars + numbers;
    }
    if (getSpecial) {
      chars = chars + specials;
    }
    if (chars.length == 0) {
      chars = lower + upper + numbers + specials;
    }
    if (
      typeof personalChars == "string" &&
      personalChars &&
      personalChars != ""
    ) {
      chars = personalChars;
    }

    chars = chars.split("");

    while (cont < size) {
      var num = parseInt(Math.random() * chars.length);
      pass = pass + chars[num];
      cont++;
    }
  } else {
    const randexp = new RandExp(regex);
    pass = randexp.gen();
  }

  return pass;
};
