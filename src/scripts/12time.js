async function getTime() {
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
