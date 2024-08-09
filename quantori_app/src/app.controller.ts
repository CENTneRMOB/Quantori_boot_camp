import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from "@nestjs/common";
import { AppService } from "./app.service";
import { BearerAuthGuard } from "./auth/local-auth.guard";

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @UseGuards(BearerAuthGuard)
  @Get("profile")
  async getProfile(@Request() req: Request) {
    const token =
      req.headers["authorization"].split(" ")[1];
    return await this.appService.getProfile(
      token,
    );
  }

  @Post("login")
  logIn(
    @Body()
    body: {
      email: string;
      password: string;
    },
  ) {
    return this.appService.logIn(body);
  }
}
