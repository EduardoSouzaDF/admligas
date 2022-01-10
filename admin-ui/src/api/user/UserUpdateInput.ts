export type UserUpdateInput = {
  cpf?: string;
  email?: string;
  nome?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
