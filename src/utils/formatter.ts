import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export function dateFormatter(date: Date): string {
  const result = formatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  })

  return result;
}
