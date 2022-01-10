import { PrismaService } from "nestjs-prisma";
import { Prisma, Liga, User } from "@prisma/client";

export class LigaServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LigaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LigaFindManyArgs>
  ): Promise<number> {
    return this.prisma.liga.count(args);
  }

  async findMany<T extends Prisma.LigaFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LigaFindManyArgs>
  ): Promise<Liga[]> {
    return this.prisma.liga.findMany(args);
  }
  async findOne<T extends Prisma.LigaFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LigaFindUniqueArgs>
  ): Promise<Liga | null> {
    return this.prisma.liga.findUnique(args);
  }
  async create<T extends Prisma.LigaCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LigaCreateArgs>
  ): Promise<Liga> {
    return this.prisma.liga.create<T>(args);
  }
  async update<T extends Prisma.LigaUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LigaUpdateArgs>
  ): Promise<Liga> {
    return this.prisma.liga.update<T>(args);
  }
  async delete<T extends Prisma.LigaDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LigaDeleteArgs>
  ): Promise<Liga> {
    return this.prisma.liga.delete(args);
  }

  async findOwner(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.liga
      .findUnique({
        where: { id: parentId },
      })
      .owner(args);
  }
}
