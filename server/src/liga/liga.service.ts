import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LigaServiceBase } from "./base/liga.service.base";

@Injectable()
export class LigaService extends LigaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
