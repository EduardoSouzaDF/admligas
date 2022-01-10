import { ArgsType, Field } from "@nestjs/graphql";
import { LigaWhereUniqueInput } from "./LigaWhereUniqueInput";

@ArgsType()
class DeleteLigaArgs {
  @Field(() => LigaWhereUniqueInput, { nullable: false })
  where!: LigaWhereUniqueInput;
}

export { DeleteLigaArgs };
