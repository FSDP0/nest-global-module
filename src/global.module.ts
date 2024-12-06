import { Global, Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { join } from "path";

import { GLOBAL_CONSTANT } from "./constants/global.constant";

const {
  PATH: { PROJECT, ENVIRONMENT }
} = GLOBAL_CONSTANT;

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        join(PROJECT.ROOT_DIR, ENVIRONMENT.ENV_DIR, ".env"),
        join(PROJECT.ROOT_DIR, ENVIRONMENT.ENV_DIR, `.env.${process.env["NODE_ENV"]}`)
      ],
      isGlobal: true
    })
  ]
})
export class GlobalModule {}
