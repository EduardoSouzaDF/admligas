import { ArgsType, Field } from "@nestjs/graphql";
import { LigaWhereUniqueInput } from "./LigaWhereUniqueInput";

@ArgsType()
class LigaFindUniqueArgs {
  @Field(() => LigaWhereUniqueInput, { nullable: false })
  where!: LigaWhereUniqueInput;
}

export { LigaFindUniqueArgs };
