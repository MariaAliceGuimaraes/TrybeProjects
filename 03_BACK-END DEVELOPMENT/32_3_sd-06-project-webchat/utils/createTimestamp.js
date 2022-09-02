const addZero = (num) => {
if (num <= 9) return `0${num}`;
return num;
};

const createTimestamp = () => {
const date = new Date();
const day = addZero(date.getDate()).toString();
const month = addZero(date.getMonth() + 1).toString();
const hours = addZero(date.getHours());
const minutes = addZero(date.getMinutes());
const seconds = addZero(date.getSeconds());

const formattedDate = `${day}-${month}-${date.getFullYear()}`;
const formattedTime = `${hours}:${minutes}:${seconds}`;

return `${formattedDate} ${formattedTime}`;
};

module.exports = { createTimestamp };
