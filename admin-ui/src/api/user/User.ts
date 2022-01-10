import { Liga } from "../liga/Liga";

export type User = {
  cpf: string;
  createdAt: Date;
  email: string;
  id: string;
  ligas?: Array<Liga>;
  nome: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
