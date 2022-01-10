import { ArgsType, Field } from "@nestjs/graphql";
import { LigaCreateInput } from "./LigaCreateInput";

@ArgsType()
class CreateLigaArgs {
  @Field(() => LigaCreateInput, { nullable: false })
  data!: LigaCreateInput;
}

export { CreateLigaArgs };
