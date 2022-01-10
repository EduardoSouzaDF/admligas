import { ArgsType, Field } from "@nestjs/graphql";
import { LigaWhereUniqueInput } from "./LigaWhereUniqueInput";
import { LigaUpdateInput } from "./LigaUpdateInput";

@ArgsType()
class UpdateLigaArgs {
  @Field(() => LigaWhereUniqueInput, { nullable: false })
  where!: LigaWhereUniqueInput;
  @Field(() => LigaUpdateInput, { nullable: false })
  data!: LigaUpdateInput;
}

export { UpdateLigaArgs };
