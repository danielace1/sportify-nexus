import dayjs from "dayjs";

export function formatDate(date, format = "hh:mm A, DD MMM YYYY") {
  return dayjs(date).format(format);
}
