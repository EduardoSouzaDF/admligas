export type User = {
  cpf: string;
  createdAt: Date;
  email: string;
  id: string;
  nome: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
