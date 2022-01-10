export type User = {
  cpf: string;
  createdAt: Date;
  email: string;
  firstName: string | null;
  id: string;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
