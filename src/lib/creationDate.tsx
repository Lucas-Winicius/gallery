import moment from "moment";

export default function creationDate(date: string | number | Date) {
  const message = moment(date).fromNow();
  return message;
}
