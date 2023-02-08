const timezones = require("./timezones.json");

function getTimezoneByValue(value) {
  return timezones.find((timezone) => timezone.value === value);
}

module.exports = {
  getTimezoneByValue,
}