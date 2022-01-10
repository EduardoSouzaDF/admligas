import { LigaWhereInput } from "./LigaWhereInput";
import { LigaOrderByInput } from "./LigaOrderByInput";

export type LigaFindManyArgs = {
  where?: LigaWhereInput;
  orderBy?: LigaOrderByInput;
  skip?: number;
  take?: number;
};
