getTime()
  .then((time) => {
    console.log(`Set the time to ${time}`);
    $("#time").text(time);
  })
  .catch((error) => {
    console.error("Failed to set time \n" + error);
  });
window.setInterval(() => {
  getTime()
    .then((time) => {
      console.log(`Set the time to ${time}`);
      $("#time").text(time);
    })
    .catch((error) => {
      console.error("Failed to set time \n" + error);
    });
}, 16.66666666);
