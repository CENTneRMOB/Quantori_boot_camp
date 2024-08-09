import { Module } from "@nestjs/common";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { UsersModule } from "../users/users.module";
import { BearerStrategy } from "./local.strategy";

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, BearerStrategy],
})
export class AuthModule {}
