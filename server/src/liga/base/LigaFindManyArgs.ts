import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { LigaWhereInput } from "./LigaWhereInput";
import { Type } from "class-transformer";
import { LigaOrderByInput } from "./LigaOrderByInput";

@ArgsType()
class LigaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => LigaWhereInput,
  })
  @Field(() => LigaWhereInput, { nullable: true })
  @Type(() => LigaWhereInput)
  where?: LigaWhereInput;

  @ApiProperty({
    required: false,
    type: LigaOrderByInput,
  })
  @Field(() => LigaOrderByInput, { nullable: true })
  @Type(() => LigaOrderByInput)
  orderBy?: LigaOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { LigaFindManyArgs };
