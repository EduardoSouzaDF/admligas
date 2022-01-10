import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LigaService } from "./liga.service";
import { LigaControllerBase } from "./base/liga.controller.base";

@swagger.ApiTags("ligas")
@common.Controller("ligas")
export class LigaController extends LigaControllerBase {
  constructor(
    protected readonly service: LigaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
