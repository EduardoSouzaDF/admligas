import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserWhereInput = {
  cpf?: StringFilter;
  email?: StringFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  username?: StringFilter;
};
