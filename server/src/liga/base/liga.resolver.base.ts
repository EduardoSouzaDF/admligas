import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateLigaArgs } from "./CreateLigaArgs";
import { UpdateLigaArgs } from "./UpdateLigaArgs";
import { DeleteLigaArgs } from "./DeleteLigaArgs";
import { LigaFindManyArgs } from "./LigaFindManyArgs";
import { LigaFindUniqueArgs } from "./LigaFindUniqueArgs";
import { Liga } from "./Liga";
import { UserFindManyArgs } from "../../user/base/UserFindManyArgs";
import { User } from "../../user/base/User";
import { LigaService } from "../liga.service";

@graphql.Resolver(() => Liga)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LigaResolverBase {
  constructor(
    protected readonly service: LigaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Liga",
    action: "read",
    possession: "any",
  })
  async _ligasMeta(
    @graphql.Args() args: LigaFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Liga])
  @nestAccessControl.UseRoles({
    resource: "Liga",
    action: "read",
    possession: "any",
  })
  async ligas(
    @graphql.Args() args: LigaFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Liga[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Liga",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Liga, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Liga",
    action: "read",
    possession: "own",
  })
  async liga(
    @graphql.Args() args: LigaFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Liga | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Liga",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Liga)
  @nestAccessControl.UseRoles({
    resource: "Liga",
    action: "create",
    possession: "any",
  })
  async createLiga(
    @graphql.Args() args: CreateLigaArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Liga> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Liga",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Liga"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Liga)
  @nestAccessControl.UseRoles({
    resource: "Liga",
    action: "update",
    possession: "any",
  })
  async updateLiga(
    @graphql.Args() args: UpdateLigaArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Liga | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Liga",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Liga"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Liga)
  @nestAccessControl.UseRoles({
    resource: "Liga",
    action: "delete",
    possession: "any",
  })
  async deleteLiga(@graphql.Args() args: DeleteLigaArgs): Promise<Liga | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [User])
  @nestAccessControl.UseRoles({
    resource: "Liga",
    action: "read",
    possession: "any",
  })
  async owner(
    @graphql.Parent() parent: Liga,
    @graphql.Args() args: UserFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<User[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "User",
    });
    const results = await this.service.findOwner(parent.id, args);

    if (!results) {
      return [];
    }

    return results.map((result) => permission.filter(result));
  }
}
