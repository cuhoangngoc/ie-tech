const formatDate = (datetime) => {
  const date = new Date(datetime);
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
  const day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
  const seconds =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  const minutes =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  const hour = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
  return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
};

export default formatDate;
