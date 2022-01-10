import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LigaWhereInput = {
  ativo?: BooleanNullableFilter;
  descricao?: StringNullableFilter;
  id?: StringFilter;
  nome?: StringFilter;
  sigla?: StringNullableFilter;
  url?: StringNullableFilter;
};
