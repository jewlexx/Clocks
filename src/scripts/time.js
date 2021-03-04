async function getTime12() {
  let am = "AM";
  const date = new Date();

  // #region Hour
  let hour = date.getHours();

  if (hour > 12) {
    hour -= 12;
    am = "PM";
  }
  // #endregion Hour

  // #region Minute
  let minute = date.getMinutes().toString();

  if (minute.length == 1) {
    minute = "0" + minute;
  }
  // #endregion Minute

  // #region second
  let second = date.getSeconds().toString();

  if (second.length == 1) {
    second = "0" + second;
  }
  // #endregion second

  return `${hour}:${minute}:${second} ${am}`;
}

async function getTime24() {
  const date = new Date();

  // #region Hour
  let hour = 13;

  if (!is24 && hour > 12) {
    hour = hour - 12;
  }

  if (hour.length == 1) {
    hour = "0" + hour;
  }
  // #endregion Hour

  // #region Minute
  let minute = date.getMinutes().toString();

  if (minute.length == 1) {
    minute = "0" + minute;
  }
  // #endregion Minute

  // #region second
  let second = date.getSeconds().toString();

  if (second.length == 1) {
    second = "0" + second;
  }
  // #endregion second

  return `${hour}:${minute}:${second}`;
}
