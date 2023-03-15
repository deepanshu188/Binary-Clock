// DOM Selectors
const selector = (name) => document.getElementsByClassName(name);

const hour1 = selector("hour-1");
const hour2 = selector("hour-2");
const min1 = selector("min-1");
const min2 = selector("min-2");

// circles color
const fill = "#fff";
const resetColor = "#000";

setInterval(() => {
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  let h = hour.toString();
  let m = minute.toString();

  if (h <= 9) h = "0".concat(h);

  if (m <= 9) m = "0".concat(m);

  const toBinary = (val) =>
    Number(val).toString(2).split("").reverse().join("");

  const h1 = toBinary(h[0]);
  const h2 = toBinary(h[1]);
  const m1 = toBinary(m[0]);
  const m2 = toBinary(m[1]);

  let j = 3;

  for (let i = 0; i <= 3; i++) {
    const clocks = [hour1, hour2, min1, min2];

    clocks.map((clock) => (clock[j].style.background = resetColor));

    if (h1[i] === "1") hour1[j].style.background = fill;
    if (h2[i] === "1") hour2[j].style.background = fill;
    if (m1[i] === "1") min1[j].style.background = fill;
    if (m2[i] === "1") min2[j].style.background = fill;
    j--;
  }
}, 1000);
