import moment from "moment";
import "moment/locale/pt-br";

export default function creationDate(date: string | number | Date) {
  moment.locale("pt-BR");
  const message = moment(date).fromNow();
  return message;
}
