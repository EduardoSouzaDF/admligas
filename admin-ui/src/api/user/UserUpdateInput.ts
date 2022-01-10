export type UserUpdateInput = {
  cpf?: string;
  email?: string;
  firstName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
