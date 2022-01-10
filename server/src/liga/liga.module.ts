import { Module } from "@nestjs/common";
import { LigaModuleBase } from "./base/liga.module.base";
import { LigaService } from "./liga.service";
import { LigaController } from "./liga.controller";
import { LigaResolver } from "./liga.resolver";

@Module({
  imports: [LigaModuleBase],
  controllers: [LigaController],
  providers: [LigaService, LigaResolver],
  exports: [LigaService],
})
export class LigaModule {}
