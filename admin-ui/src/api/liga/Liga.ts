import { User } from "../user/User";

export type Liga = {
  ativo: boolean | null;
  createdAt: Date;
  descricao: string | null;
  id: string;
  nome: string;
  owner?: Array<User>;
  sigla: string | null;
  updatedAt: Date;
  url: string | null;
};
