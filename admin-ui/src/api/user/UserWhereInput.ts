import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  cpf?: StringFilter;
  email?: StringFilter;
  id?: StringFilter;
  nome?: StringNullableFilter;
  username?: StringFilter;
};
