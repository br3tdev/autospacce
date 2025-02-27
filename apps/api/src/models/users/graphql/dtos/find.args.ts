import {
  ArgsType,
  Field,
  PartialType,
  registerEnumType,
} from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import { RestrictProperties } from "src/common/dtos/common.input";
import { UserOrderByWithRelationInput } from "./order-by.args";
import { UserWhereInput, UserWhereUniqueInput } from "./where.args";

registerEnumType(Prisma.UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
});

@ArgsType()
class FindManyUserArgsStrict
  implements
    RestrictProperties<
      FindManyUserArgsStrict,
      Omit<Prisma.UserFindManyArgs, "include" | "select">
    >
{
  @Field(() => [String], { nullable: true })
  omit: Prisma.UserOmit<DefaultArgs> | null;
  where: UserWhereInput;
  orderBy: UserOrderByWithRelationInput[];
  cursor: UserWhereUniqueInput;
  take: number;
  skip: number;
  @Field(() => [Prisma.UserScalarFieldEnum])
  distinct: Prisma.UserScalarFieldEnum[];
}

@ArgsType()
export class FindManyUserArgs extends PartialType(FindManyUserArgsStrict) {}

@ArgsType()
export class FindUniqueUserArgs {
  where: UserWhereUniqueInput;
}
