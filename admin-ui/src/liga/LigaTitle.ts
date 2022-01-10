import { Liga as TLiga } from "../api/liga/Liga";

export const LIGA_TITLE_FIELD = "nome";

export const LigaTitle = (record: TLiga): string => {
  return record.nome || record.id;
};
